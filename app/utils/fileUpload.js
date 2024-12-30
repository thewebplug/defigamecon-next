import axios from "axios";

export default function fileUpload(
  e,
  dataType,
  setListItem,
  setLoading,
  mediaType,
  auth
) {
  if (mediaType === "video") {
    const maxSize = 15 * 1024 * 1024; // 15MB in bytes
    if (e.size > maxSize) {
      setLoading(false);
      alert("File size must be less than 15MB");
      return;
    }
  } else {
    const maxSize = 250 * 1024; // 250KB in bytes
    if (e.size > maxSize) {
      setLoading(false);
      alert("File size must be less than 250KB");
      return;
    }
  }

  setLoading(true);

  // let files = e.target.files;
  // let allUploadedFiles = images;

  const fileToUri = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  };

  if (e) {
    // for (let i = 0; i < files.length; i++) {
    fileToUri(e, (err, result) => {
      if (result) {
        axios
          .post(
            // `${process.env.REACT_APP_DEV_URL}/files/upload`,
            `${process.env.NEXT_PUBLIC_URL}/files/upload`,
            {
              image: result,
            },
            {
              headers: {
                Authorization: `Bearer ${auth ? auth.token : ""}`,
              },
            }
          )
          .then((response) => {
            if (dataType === "string") {
              setListItem(response?.data);
            } else {
              setListItem((prev) => [...prev, response?.data]);
            }
            // setPoemMedia(response?.data);
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            console.log("ERROR", error);
            if (error?.response?.data?.message) {
              alert(error?.response?.data?.message);
            } else {
              alert(error?.response?.statusText);
            }
          });
      }
    });
    // }
  }
}
