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
          border: 2px solid grey; /* 👈 borde gris */
          border-radius: 6px;
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
