import axios from "../app/api/axiosintercepter";

const downloadVideo = async (docId,prod=false) => {
  try {
    const response = await axios.get(`/sleepm/${prod ? "downloadvideo" : "downloadvideoprod"}/${docId}`, {
      //   headers: {
      //     Authorization: `Bearer ${your_jwt_token}`,
      //   },
      responseType: "blob", // Important for file download
    });
    console.log(response);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    console.log(url);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "video.mp4"); // You can specify the file name
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Error downloading the video", error);
  }
};

export default downloadVideo;
