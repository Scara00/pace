"use client";
import CustomButtonFunny from "@/components/ui/buttonFunnt";
import CustomButton from "@/components/ui/buttons";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useState } from "react";

const words = `Amore, questa situazione mi pesa troppo… Voglio solo stare bene con te e sistemare le cose. Facciamo pace?`;
const words2 = `Sono super contento, ora non ho più l'ansia`;

export default function Home() {
  const [showYes, setShowYes] = useState(false);
  return (
    <div
      className="text-3xl font-bold underline"
      style={{
        height: "100vh",
        backgroundColor: "#F4978E",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 40,
        gap: 20,
      }}>
      {showYes && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gap: 16,
          }}>
          <iframe src="https://lottie.host/embed/6538fea0-7739-401b-b345-ce13bd9010a5/9HHBb86PCT.lottie"></iframe>
          <TextGenerateEffect words={words2} />
        </div>
      )}
      {!showYes && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}>
            <iframe src="https://lottie.host/embed/8cfd12fe-07b8-45b2-9848-9db65858dfab/MPMiOfoxKd.lottie"></iframe>
            <TextGenerateEffect words={words} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              gap: 8,
            }}>
            <CustomButton
              text={"Facciamo pace!"}
              onClick={() => {
                setShowYes(true);
              }}
              style={{
                padding: "8px 8px",
                borderRadius: "8px",
                width: "100%",
                fontSize: "12px",
                border: "1px solid #fff",
                color: "#fff",
              }}></CustomButton>
            <CustomButtonFunny
              text={"non voglio"}
              style={{
                backgroundColor: "#000",
                padding: "8px 8px",
                borderRadius: "8px",
                width: "100%",
                fontSize: "12px",
                color: "#fff",
              }}
              onClick={() => {}}></CustomButtonFunny>
          </div>
        </>
      )}
    </div>
  );
}
