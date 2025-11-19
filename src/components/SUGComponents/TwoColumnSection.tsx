import React from 'react';
import {
  Text,
  RichText,
  NextImage,
  TextField,
  RichTextField,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';

import styles from './TwoColumnSection.module.css';

type TwoColumnSectionProps = {
  fields: {
    Name: TextField;
    Content: RichTextField;
    Photo: ImageField;
  };
};

const TwoColumnSection = (props: TwoColumnSectionProps): JSX.Element => {
  const { fields } = props;

  if (!fields) return <></>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.plasmaCard}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            <Text field={fields.Name} />
          </h2>
          <div className={styles.contentText}>
            <RichText field={fields.Content} />
          </div>
        </div>

        {fields.Photo && (
          <div className={styles.right}>
            <NextImage
              field={fields.Photo}
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TwoColumnSection;
