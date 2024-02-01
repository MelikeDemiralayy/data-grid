import { useRef } from "react";
import { addSocialMedia } from "../../data/api";
import styles from "./style.module.css";
import PropTypes from "prop-types";

const NewAccount = ({ closeModal }) => {
  const SosyalMedyaLinkiRef = useRef(null);
  const SosyalMedyaAdıRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSaveClick = async () => {
    // Input değerlerini alarak yeni sosyal medya objesini oluşturun
    const newSocialMedia = {
      SosyalMedyaLinki: SosyalMedyaLinkiRef.current.value,
      SosyalMedyaAdi: SosyalMedyaAdıRef.current.value,
      Aciklama: descriptionRef.current.value,
    };

    // Yeni sosyal medya verilerini eklemek için API fonksiyonunu kullanın
    await addSocialMedia(newSocialMedia);

    // Modalı kapatın
    closeModal();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <button className={styles.close} onClick={closeModal}>
          X
        </button>
        <label htmlFor="socialMediaLink">Sosyal Medya Linki</label>
        <input type="text" id="socialMediaLink" className={styles.input} />

        <label htmlFor="socialMediaName">Sosyal Medya Adı</label>
        <input type="text" id="socialMediaName" className={styles.input} />

        <label htmlFor="description">Açıklama</label>
        <input type="text" id="description" className={styles.input} />

        <div className={styles.button.contanier}>
          <button className={styles.cancel} onClick={closeModal}>
            Vazgeç
          </button>
          <button className={styles.save} onClick={handleSaveClick}>
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

NewAccount.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default NewAccount;
