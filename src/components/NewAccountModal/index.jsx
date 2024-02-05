import { useState, useEffect } from "react";
import { addSocialMedia, fetchSocialMedia } from "../../data/api";
import styles from "./style.module.css";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewAccount = ({ closeModal }) => {
  const [socialMediaData, setSocialMediaData] = useState([]);
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [socialMediaName, setSocialMediaName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const localData = JSON.parse(localStorage.getItem("socialMediaData"));
        if (localData) {
          setSocialMediaData(localData);
        } else {
          const data = await fetchSocialMedia();
          setSocialMediaData(data.socialMediaData);
        }
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  const handleSaveClick = async () => {
    const newSocialMedia = {
      "Sosyal Medya Linki": socialMediaLink,
      "Sosyal Medya Adı": socialMediaName,
      Açıklma: description,
    };

    try {
      const addedSocialMedia = await addSocialMedia(newSocialMedia); // Yeni veri ekleyip dönen veriyi almak için
      // Yeni eklenen veriyi listeye ekleyip sayfayı yeniden güncellemk için;
      setSocialMediaData((prevSocialMediaData) => [
        ...prevSocialMediaData,
        addedSocialMedia,
      ]);
      console.log("test");

      // Güncellenen veriyi localStorage'a kaydet;
      localStorage.setItem(
        "socialMediaData",
        JSON.stringify([...socialMediaData, addedSocialMedia])
      );

      const fetchData = async () => {
        try {
          const localData = JSON.parse(localStorage.getItem("socialMediaData"));
          if (localData) {
            setSocialMediaData(localData);
          } else {
            const data = await fetchSocialMedia();
            setSocialMediaData(data.socialMediaData);
          }
        } catch (error) {
          console.error("Veri çekme hatası:", error);
        }
      };
      fetchData();

      toast.success("Veri başarıyla kaydedildi!", { autoClose: 3000 });
    } catch (error) {
      console.error("Veri ekleme hatası:", error);
      toast.error("Veri kaydedilirken bir hata oluştu!", { autoClose: 5000 });
    } finally {
      closeModal();
    }
  };
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <button className={styles.close} onClick={closeModal}>
          X
        </button>
        <label htmlFor="socialMediaLink">Sosyal Medya Linki</label>
        <input
          type="text"
          id="socialMediaLink"
          className={styles.input}
          value={socialMediaLink}
          onChange={(e) => setSocialMediaLink(e.target.value)}
        />

        <label htmlFor="socialMediaName">Sosyal Medya Adı</label>
        <input
          type="text"
          id="socialMediaName"
          className={styles.input}
          value={socialMediaName}
          onChange={(e) => setSocialMediaName(e.target.value)}
        />

        <label htmlFor="description">Açıklama</label>
        <input
          type="text"
          id="description"
          className={styles.input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className={styles.button.container}>
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
