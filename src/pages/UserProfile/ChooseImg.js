import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
function ChooseImg() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const dataUrl = reader.result;
        setSelectedImage(reader.result);
        localStorage.setItem("userImage", dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Modal>
      <input type="file" accept="/*image" onChange={handleImageChange} />
    </Modal>
  );
}
export default ChooseImg;
