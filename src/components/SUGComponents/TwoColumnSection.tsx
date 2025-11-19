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
    <div className={`${styles.twoCol} ${styles.hellPulse}`}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>
              <Text field={fields.Title} />
            </h2>

            <div className={styles.contentText}>
              <RichText field={fields.Content} />
            </div>
          </div>

          <div className={styles.right}>
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
    </div>
  );
};

export default TwoColumnSection;
