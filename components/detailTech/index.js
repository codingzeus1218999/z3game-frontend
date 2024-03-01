import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.scss";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function DetailTech({ info }) {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.languagesContainer}>
          <p className={styles.title}>Languages:</p>
          <div className={styles.languageInfos}>
            <div className={styles.language}></div>
            <div className={styles.info}>
              <div>Interface</div>
              <div>Full Audio</div>
              <div>Subtitles</div>
            </div>
          </div>
          {info.languages.map((l, _idx) => (
            <div key={_idx}>
              <hr />
              <div className={styles.languageInfos} key={_idx}>
                <div className={styles.language}>{l.lang}</div>
                <div className={styles.info}>
                  <div className={styles.icon}>
                    {l.interface && <FontAwesomeIcon icon={faCheck} />}
                  </div>
                  <div className={styles.icon}>
                    {l.fullAudio && <FontAwesomeIcon icon={faCheck} />}
                  </div>
                  <div className={styles.icon}>
                    {l.subtitles && <FontAwesomeIcon icon={faCheck} />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.classificationContainer}>
          <p className={styles.title}>{info.classification.title}</p>
          <div className="flex gap-2 items-start mt-3">
            <div className={styles.number}>
              <span>{info.classification.number}</span>
            </div>
            <div className={styles.subtitles}>
              <p>{info.classification.subtitle1}</p>
              <p>{info.classification.subtitle2}</p>
            </div>
          </div>
          <p className={styles.description}>
            {info.classification.description}
          </p>
        </div>
        <div className={styles.detailsContainer}>
          {info.details.map((d, _idx) => (
            <div key={_idx} className={styles.detail}>
              <p className={styles.label}>{d.label}: </p>
              <p className={styles.value}>{d.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.requirementsContainer}>
        <div className={styles.minimum}>
          <p className={styles.title}>minimum:</p>
          {info.requirements.minimum.map((m, _idx) => (
            <div className={styles.req} key={_idx}>
              <p className={styles.label}>{m.label}: </p>
              <p className={styles.value}>{m.value}</p>
            </div>
          ))}
        </div>
        <div className={styles.recommented}>
          <p className={styles.title}>recommended:</p>
          {info.requirements.recommended.map((m, _idx) => (
            <div className={styles.req} key={_idx}>
              <p className={styles.label}>{m.label}: </p>
              <p className={styles.value}>{m.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
