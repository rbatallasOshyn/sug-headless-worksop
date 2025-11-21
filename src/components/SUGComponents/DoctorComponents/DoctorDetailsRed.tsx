import React from 'react';
import {
  Text,
  RichText,
  NextImage,
  TextField,
  RichTextField,
  ImageField,
  Link,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';

import styles from './DoctorDetailsRed.module.css';

type DoctorDetailsRedProps = {
  fields: {
    Name: TextField;
    Content: RichTextField;
    Photo: ImageField;
    CTA: LinkField;
    CTAText: TextField;
  };
};

const DoctorDetailsRed = (props: DoctorDetailsRedProps): JSX.Element => {
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
          <Link field={fields.CTA} className="btn red bold big">
            <Text field={fields.CTAText} />
          </Link>
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

export default DoctorDetailsRed;
