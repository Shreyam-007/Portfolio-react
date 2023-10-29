import React from "react";
import Card from "../Cards/Card";
import IMAGES from "../../Images/Images";

export default function Projects() {
  return (
    <>
      <div className="flex flex-wrap m-8 place-content-center">
        <div className="p-4 px-5">
          <Card
            imgSource={IMAGES.carHub}
            projectName="Drive Easy"
            tag1="Typescript"
            tag2="Next.js"
            tag3="Tailwind CSS"
            projectDescription="An Online Car Rental Platform is a modern, responsive web application built with Next.js, TypeScript, and styled with Tailwind CSS. It offers an extensive array of car rental options, catering to the diverse needs of travelers, tourists, and anyone seeking convenient and reliable transportation solutions."
            link="https://github.com/Shreyam-007/Drive_easy"
          />
        </div>
        <div className="p-4 px-5">
          <Card
            imgSource={IMAGES.docApp}
            projectName="Krishna Dental India"
            tag1="MERN"
            tag2="Render"
            tag3="Vercel"
            projectDescription="A Dental Appointment Website which is a cutting-edge web application built using the MERN (MongoDB, Express, React, Node.js) stack, designed to streamline and enhance the dental appointment booking process for both patients and practitioners."
            link="https://krishna-dental-india.vercel.app/"
          />
        </div>
        <div className="p-4 px-5">
          <Card
            imgSource={IMAGES.currConvert}
            projectName="Currency Converter"
            tag1="Vite + React"
            tag2="Tailwind CSS"
            tag3="API"
            projectDescription="A Real-Time Currency Converter which is a responsive and user-friendly web application built using React and styled with Tailwind CSS. This dynamic platform allows users to instantly convert between different currencies by fetching real-time exchange rate data through an API."
            link="https://github.com/Shreyam-007/React-Basics/tree/main/06currencyConvertor"
          />
        </div>
        <div className="p-4 px-5">
          <Card
            imgSource="https://images.unsplash.com/photo-1610812387871-806d3db9f5aa?auto=format&fit=crop&q=80&w=2840&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            projectName="Voice-Controlled Home Automation System in
            Regional Language"
            tag1="NLP"
            tag2="Python"
            tag3="Raspberry Pi"
            projectDescription="A Voice-Controlled Home Automation System is a modern project that utilizes Raspberry Pi and Python. This system is designed to assist you in controlling various home automation devices in your house through voice commands."
            link="https://drive.google.com/file/d/1JYbQAO8xmcsK6Vl1JS0gLGfnDYWIgyCP/view?usp=sharing"
          />
        </div>
        <div className="p-4 px-5">
          <Card
            imgSource="https://images.unsplash.com/photo-1528752511608-fbec4b6ea67f?auto=format&fit=crop&q=80&w=2876&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            projectName="Smart Farming System"
            tag1="Ubuntu"
            tag2="Linux"
            tag3="Arduino"
            projectDescription="An Arduino-Based Smart Farming System is a cutting-edge solution designed to optimize agricultural practices by automating the irrigation process. It uses soil moisture sensors to detect soil moisture levels and initiates automatic watering when the moisture falls below a predefined threshold, ensuring that plants receive the ideal amount of hydration."
            link="https://drive.google.com/file/d/1morgT8TRY1Xr69cSN61Ea6Jwrb5MF7Dr/view?usp=sharing"
          />
        </div>
      </div>
    </>
  );
}
