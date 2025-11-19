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
      <div className="left">
        <h2>
          <Text field={fields.Title} />
        </h2>
        <div className="description">
          <RichText field={fields.Content} />
        </div>
      </div>

      <div className="right">
        {fields.Photo && (
          <NextImage
            field={fields.Photo}
            width={600}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </div>

      <style jsx>{`
        .two-col {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 2rem;
          border: 2px solid grey;
          border-radius: 6px;
          margin-top: 20px;

          /* Animation */
          opacity: 0;
          transform: translateY(20px);
          animation: fadeSlide 0.8s ease-out forwards;

          /* Flash corner overlay */
          position: relative;
          overflow: hidden;
        }

        /* Flash effect */
        .two-col::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
          transform: scale(0);
          animation: cornerFlash 0.6s ease-out 0.5s forwards;
          pointer-events: none;
        }

        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cornerFlash {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.7;
          }
          50% {
            transform: translate(-20%, -20%) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translate(0, 0) scale(1.8);
            opacity: 0;
          }
        }

        .left,
        .right {
          width: 50%;
        }

        .left h2 {
          margin-bottom: 1rem;
          font-size: 2rem;
          font-weight: bold;
        }

        .description :global(p) {
          font-size: 1rem;
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }

        @media (max-width: 768px) {
          .two-col {
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
