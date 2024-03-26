import Code from "../components/svg/Code";
import Desktop from "../components/svg/Desktop";
import Backend from "../components/svg/Backend";

import html from "../public/icons/html.svg";
import css from "../public/icons/css.svg";
import js from "../public/icons/js.svg";
import ts from "../public/icons/ts.svg";
import cSharp from "../public/icons/csharp.svg";
import go from "../public/icons/go.svg";
import python from "../public/icons/python.svg";
import bash from "../public/icons/bash.svg";
import react from "../public/icons/react.svg";
import redux from "../public/icons/redux.svg";
import next from "../public/icons/next.svg";
import material from "../public/icons/material.svg";
import tailwind from "../public/icons/tailwind.svg";
import astro from "../public/icons/astro.svg";
import avalonia from "../public/icons/avalonia.svg";
import figma from "../public/icons/figma.svg";
import node from "../public/icons/node.svg";
import express from "../public/icons/express.svg";
import nest from "../public/icons/nest.svg";
import mongo from "../public/icons/mongo.svg";
import postgre from "../public/icons/postgre.svg";
import dotnet from "../public/icons/dotnet.svg";
import azure from "../public/icons/azure.svg";
import aws from "../public/icons/aws.svg";
import gin from "../public/icons/gin.png";
import grpc from "../public/icons/grpc.svg";

export const skills = [
  {
    img: <Code className="h-12 w-12 text-main stroke-current" />,
    title: "Languages",
    items: [
      { lang: "HTML5", image: html },
      { lang: "CSS3", image: css },
      { lang: "JavaScript", image: js },
      { lang: "TypeScript", image: ts },
      { lang: "GO", image: go },
      { lang: "CSharp", image: cSharp },
      { lang: "Python", image: python },
      { lang: "Bash", image: bash },
    ],
  },
  {
    img: <Desktop className="h-12 w-12 text-main stroke-current" />,
    title: "Front-end",
    items: [
      { lang: "React", image: react },
      { lang: "React Native", image: react },
      { lang: "Redux", image: redux },
      { lang: "Next.js", image: next },
      { lang: "Astro", image: astro },
      { lang: "Tailwind", image: tailwind },
      { lang: "MaterialUI", image: material },
      { lang: "Avalonia UI", image: avalonia },
      { lang: "Figma", image: figma },
    ],
  },
  {
    img: <Backend className="h-12 w-12 text-main stroke-current" />,
    title: "Back-end",
    items: [
      { lang: "Node", image: node },
      { lang: "Express", image: express },
      { lang: "NestJS", image: nest },
      { lang: "Gin", image: gin },
      { lang: ".Net", image: dotnet },
      { lang: "GRPC", image: grpc },
      { lang: "PostgreSQL", image: postgre },
      { lang: "MongoDB", image: mongo },
      { lang: "Azure", image: azure },
      { lang: "AWS", image: aws },
    ],
  },
];
