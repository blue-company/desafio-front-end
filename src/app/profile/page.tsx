"use client";
import GenericCard from "@/components/genericCard";
import { Grid, Paper } from "@mui/material";
import profilePicture from "@/assets/images/profile.jpg";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const ProfileChart = dynamic(() => import("@/components/charts/profileChart"), {
  ssr: false,
});
const PercentageChart = dynamic(
  () => import("@/components/charts/percentChart"),
  {
    ssr: false,
  }
);

function Profile() {
  return (
    <Grid container className="p-6 h-screen flex justify-center">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xl={5}>
          <Paper className="w-full px-5 py-4" style={{ borderRadius: 24 }}>
            <Grid container className="flex items-center gap-5">
              <Image
                width={100}
                height={100}
                className="rounded-2xl shadow-md"
                src={profilePicture}
                alt=""
              />
              <p className="text-2xl font-[Poppins] font-semibold">
                João Keuwe
              </p>
              <span className="bg-white p-2.5 rounded-2xl font-[Poppins] font-semibold shadow-lg">
                Comercial
              </span>
            </Grid>

            <Grid container className="flex gap-4">
              <ul className="details-list flex gap-4 flex-col mt-8 mb-8">
                <li>
                  <span className="text-2xl font-semibold font-[Poppins] mr-3">
                    Nome:
                  </span>
                  <span className="text-2xl font-[Poppins]">João Keuwe</span>
                </li>
                <li>
                  <span className="text-2xl font-semibold font-[Poppins] mr-3">
                    Email:
                  </span>
                  <span className="text-2xl font-[Poppins]">
                    joaov.ojo@gmail.com
                  </span>
                </li>
                <li>
                  <span className="text-2xl font-semibold font-[Poppins] mr-3">
                    Telefone:
                  </span>
                  <span className="text-2xl font-[Poppins]">
                    (11) 97991-9177
                  </span>
                </li>
                <li>
                  <span className="text-2xl font-semibold font-[Poppins] mr-3">
                    Status:
                  </span>
                  <span className="text-2xl font-[Poppins] text-green-500">
                    Verificado
                  </span>
                </li>
              </ul>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xl={5}>
          <GenericCard title="meta" chart={<PercentageChart />} />
        </Grid>
      </Grid>

      <Grid container xl={10} display="flex" justifyContent="center">
        <GenericCard title="Vendas no mês" chart={<ProfileChart />} />
      </Grid>
    </Grid>
  );
}

export default Profile;
