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
  BR_DF: {
    annotation: { x: -10, y: -15 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_RN: {
    annotation: { x: 28, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_PB: {
    annotation: { x: 32, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_PE: {
    annotation: { x: 50, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_AL: {
    annotation: { x: 30, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_SE: {
    annotation: { x: 25, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_ES: {
    annotation: { x: 20, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_RJ: {
    annotation: { x: 25, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  PY_AM: {
    annotation: { x: 16, y: -10 },
    tag: { fontSize: 14, x: 2, y: 0 },
  },
  PY_AA: {
    annotation: { x: 15, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  PY_GU: {
    annotation: { x: -90, y: 75 },
    tag: { fontSize: 14, x: 2, y: 8 },
  },
  PY_PG: {
    annotation: { x: -130, y: 30 },
    tag: { fontSize: 14, x: 4, y: 10 },
  },
  PY_CZ: {
    annotation: { x: -40, y: 100 },
    tag: { fontSize: 14, x: 0, y: 8 },
  },
  PY_NE: {
    annotation: { x: -100, y: 45 },
    tag: { fontSize: 14, x: 4, y: 8 },
  },
  PY_CE: {
    annotation: { x: -110, y: 10 },
    tag: { fontSize: 14, x: 4, y: 10 },
  },
  PY_CR: {
    annotation: { x: -100, y: -30 },
    tag: { fontSize: 14, x: -4, y: 12 },
  },
  PY_AS: {
    annotation: { x: -110, y: -10 },
    tag: { fontSize: 14, x: 4, y: 10 },
  },
  PY_MI: {
    annotation: { x: -25, y: 30 },
    tag: { fontSize: 14, x: -5, y: 10 },
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
  stroke: "#607D8B",
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
                  onMouseEnter={() => setActiveGeo(geoId)}
                  onMouseLeave={() => setActiveGeo(null)}
                  onClick={() => setActiveGeo(geoId)}
                  style={{
                    default: {
                      ...geographyStyle,
                      fill: countryColor,
                    },
                    hover: {
                      ...geographyStyle,
                      fill: "blue",
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
                  >
                    <text
                      x={tagPosition.x}
                      y={tagPosition.y}
                      fontSize={tagPosition.fontSize}
                      alignmentBaseline="middle"
                    >
                      {geoId}
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
        height={400}
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
