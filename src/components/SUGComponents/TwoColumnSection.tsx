import React from 'react';
import {
  Text,
  RichText,
  NextImage,
  TextField,
  RichTextField,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';

type TwoColumnSectionProps = {
  fields: {
    Title: TextField;
    Content: RichTextField;
    Photo: ImageField;
  };
};

const TwoColumnSection = (props: TwoColumnSectionProps): JSX.Element => {
  const { fields } = props;

  if (!fields) {
    return <></>;
  }

  return (
    <div className="two-col">
      <div className="fire-glow" />

      <div className="inner">
        <div className="content">
          <div className="left">
            <h2>
              <Text field={fields.Title} />
            </h2>
            <div className="content-text">
              <RichText field={fields.Content} />
            </div>
          </div>

          <div className="right">
            {fields.Photo && (
              <NextImage
                field={fields.Photo}
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto', borderRadius: '14px' }}
              />
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        body {
          background: #0a0000;
        }

        .two-col {
          width: 100%;
          margin: 20px auto 0;
          position: relative;
          border-radius: 22px;
          overflow: hidden;

          opacity: 0;
          transform: scale(0.88) translateY(50px) rotate(-4deg);
          animation: heroIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .fire-glow {
          position: absolute;
          inset: -60%;
          background: conic-gradient(#ff0000, #a00000, #ff3300, #660000, #ff0000);
          filter: blur(80px);
          opacity: 0.9;
          animation: fireSpin 7s linear infinite;
          z-index: 0;
        }

        .inner {
          position: relative;
          z-index: 2;
          padding: 3rem;
          border-radius: 20px;

          background: linear-gradient(
            140deg,
            rgba(255, 0, 0, 0.25),
            rgba(30, 0, 0, 0.6),
            rgba(90, 0, 0, 0.7)
          );

          background-size: 250% 250%;
          animation: infernoFlow 8s ease-in-out infinite;

          box-shadow: 0 0 50px rgba(255, 0, 0, 0.4), 0 0 80px rgba(120, 0, 0, 0.4),
            inset 0 0 40px rgba(255, 0, 0, 0.2);
        }

        .two-col::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 22px;
          padding: 3px;
          background: linear-gradient(90deg, #ff0000, #550000, #ff1a1a, #440000, #ff0000);
          background-size: 300% 300%;
          animation: borderFire 3s ease infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: 1;
        }

        .content {
          display: flex;
          gap: 2.5rem;
          align-items: center;
          justify-content: space-between;
        }

        .left,
        .right {
          width: 50%;
        }

        .left h2 {
          font-size: 2.6rem;
          font-weight: 900;
          margin-bottom: 1.2rem;

          color: #ff1a1a;
          text-shadow: 0 0 12px rgba(255, 0, 0, 1), 0 0 30px rgba(120, 0, 0, 0.9),
            0 0 50px rgba(255, 30, 30, 0.8);
        }

        .content-text :global(p) {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #ffcccc;
          margin: 0 0 1rem 0;
        }

        .right :global(img) {
          width: 100%;
          border-radius: 14px;
          box-shadow: 0 0 40px rgba(255, 0, 0, 0.5), 0 0 70px rgba(100, 0, 0, 0.35);
        }

        .two-col:hover {
          transform: scale(0.94) translateY(10px) rotate(1deg);
        }

        .two-col:hover .fire-glow {
          filter: blur(110px);
          opacity: 1;
        }

        @keyframes heroIn {
          0% {
            opacity: 0;
            transform: scale(0.88) translateY(50px) rotate(-4deg);
          }
          60% {
            opacity: 1;
            transform: scale(1.06) translateY(-6px) rotate(1deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0) rotate(0deg);
          }
        }

        @keyframes fireSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes borderFire {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes infernoFlow {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        @media (max-width: 800px) {
          .content {
            flex-direction: column;
            text-align: center;
          }
          .left,
          .right {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default TwoColumnSection;
