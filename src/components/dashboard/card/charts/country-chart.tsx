import { useState } from "react";
import { geoCentroid, ExtendedFeature } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  GeographyProps as BaseGeographyProps,
} from "react-simple-maps";
import { GeoJsonObject } from "geojson";

import brTopoJson from "../../../../../br-topo.json";

const dataSource: GeoJsonObject = brTopoJson as GeoJsonObject;

interface AnnotationData {
  x: number;
  y: number;
}

interface TagData {
  fontSize: number;
  x: number;
  y: number;
}

interface StateAnnotations {
  [key: string]: {
    annotation: AnnotationData;
    tag: TagData;
  };
}

const statesWithAnnotations: StateAnnotations = {
  BR_AC: {
    annotation: { x: 0, y: 100 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_AL: {
    annotation: { x: 0, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_AP: {
    annotation: { x: 100, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_AM: {
    annotation: { x: 0, y: 200 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_BA: {
    annotation: { x: 50, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_CE: {
    annotation: { x: 50, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_DF: {
    annotation: { x: 100, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_ES: {
    annotation: { x: 50, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_GO: {
    annotation: { x: 100, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_MA: {
    annotation: { x: 0, y: -50 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_MT: {
    annotation: { x: -200, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_MS: {
    annotation: { x: -200, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_MG: {
    annotation: { x: 0, y: -100 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_PA: {
    annotation: { x: 150, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_PB: {
    annotation: { x: 20, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_PR: {
    annotation: { x: 100, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_PE: {
    annotation: { x: 20, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_PI: {
    annotation: { x: 0, y: -70 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_RJ: {
    annotation: { x: 50, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_RN: {
    annotation: { x: 10, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_RS: {
    annotation: { x: 100, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_RO: {
    annotation: { x: -30, y: 80 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_RR: {
    annotation: { x: -200, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_SC: {
    annotation: { x: 100, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_SP: {
    annotation: { x: 100, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_SE: {
    annotation: { x: 20, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
  BR_TO: {
    annotation: { x: 100, y: 0 },
    tag: { fontSize: 18, x: 0, y: 0 },
  },
};

interface GeographyStyle {
  fill: string;
  backgroundColor: string;
  stroke: string;
  strokeWidth: number;
  outline: string;
  cursor: string;
  transition: string;
}

const geographyStyle: GeographyStyle = {
  fill: "#D1D5DB",
  backgroundColor: "yellow",
  stroke: "",
  strokeWidth: 1,
  outline: "none",
  cursor: "pointer",
  transition: "all .2s",
};

interface RenderGeographyProps {
  dataSource: GeoJsonObject;
  countryId: string;
  countryColor: string;
}

interface ExtendedGeographyProps extends BaseGeographyProps {
  rsmKey: string;
}

const CountryChart = () => {
  const [activeGeo, setActiveGeo] = useState<string | null>(null);
  const [hoverInfo, setHoverInfo] = useState<{
    id: string;
    value: string;
  } | null>(null);

  const handleMouseEnter = (geoId: string) => {
    setActiveGeo(geoId);
    const randomValue = `R$ ${Math.floor(Math.random() * 1000)},00`;
    setHoverInfo({ id: geoId, value: randomValue });
  };

  const handleMouseLeave = () => {
    setActiveGeo(null);
    setHoverInfo(null);
  };

  const renderGeograph = ({
    dataSource,
    countryId,
    countryColor,
  }: RenderGeographyProps) => {
    return (
      <Geographies geography={dataSource}>
        {({ geographies }) =>
          geographies.map((geo: ExtendedFeature & ExtendedGeographyProps) => {
            if (!geo.properties) return null;

            const centroid = geoCentroid(geo);
            const geoId = geo.properties.id as string;
            const annotationOffset =
              statesWithAnnotations[`${countryId}_${geoId}`];
            const tagPosition = annotationOffset?.tag || {
              x: 2,
              y: 0,
              fontSize: 12,
            };
            const isFocused = activeGeo === geoId;
            return (
              <>
                <Geography
                  key={geo.rsmKey + "-Geography"}
                  stroke="#FFF"
                  geography={geo}
                  onMouseEnter={() => handleMouseEnter(geoId)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => setActiveGeo(geoId)}
                  style={{
                    default: {
                      ...geographyStyle,
                      fill: countryColor,
                      zIndex: 0,
                    },
                    hover: {
                      ...geographyStyle,
                      fill: "blue",
                      fontWeight: "600",
                      zIndex: 1,
                    },
                    pressed: {
                      ...geographyStyle,
                      fill: "black",
                    },
                  }}
                />
                {isFocused && annotationOffset && (
                  <Annotation
                    connectorProps={{
                      stroke: "rgb(239,171,11)",
                    }}
                    subject={centroid}
                    dx={annotationOffset.annotation.x}
                    dy={annotationOffset.annotation.y}
                    style={{
                      zIndex: 3,
                    }}
                  >
                    <text
                      x={tagPosition.x}
                      y={tagPosition.y}
                      fontSize={tagPosition.fontSize}
                      fontWeight="600"
                      alignmentBaseline="middle"
                    >
                      {geoId} - {hoverInfo?.value}
                    </text>
                  </Annotation>
                )}
              </>
            );
          })
        }
      </Geographies>
    );
  };

  return (
    <div>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 500,
          center: [-54, -15],
        }}
        width={600}
        height={350}
      >
        {renderGeograph({
          dataSource,
          countryId: "BR",
          countryColor: "#D1D5DB",
        })}
      </ComposableMap>
    </div>
  );
};

export default CountryChart;
