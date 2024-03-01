import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

import styles from "./style.module.scss";
import Counter from "../counter";
import PremiumButton from "../premiumButton";

export default function DetailCard({ images, cardInfo }) {
  return (
    <div className={styles.container}>
      <div className={styles.galleryContainer}>
        <ImageGallery
          items={images.map((i) => ({
            ...i,
            originalClass: styles.originalClass,
            thumbnailClass: styles.thumbnailClass,
          }))}
          useBrowserFullscreen={false}
        />
      </div>
      <div className={styles.cardContainer}>
        <p className={styles.title}>{cardInfo.title}</p>
        <p className={styles.type}>{cardInfo.type}</p>
        <p className={styles.price}>
          {cardInfo.moneyUnit} {cardInfo.price}
        </p>
        <div className={styles.priceDescription}>
          <p>à vista via PIX</p>
          <p>{cardInfo.priceDescription}</p>
        </div>
        <div className={styles.counterContainer}>
          <Counter maxCount={cardInfo.count} />
        </div>
        <div className="al-button-primary mt-3 w-full text-center">
          ADICIONAR AO CARRINHO
        </div>
        {cardInfo.premium.length > 0 && (
          <div className={styles.premiumContainer}>
            {cardInfo.premium.map((p, _idx) => (
              <PremiumButton key={_idx} data={p} />
            ))}
          </div>
        )}
        <div>
          <p className={styles.descriptionLabel}>DESCRIÇÃO</p>
          <p className={styles.description}>{cardInfo.description}</p>
        </div>
      </div>
    </div>
  );
}
