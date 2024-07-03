const downloadImage = async (imgsrc) => {
  const fileName = imgsrc.substring(imgsrc.lastIndexOf("/") + 1);
  try {
    // Fetch the image as a Blob
    const response = await fetch(imgsrc);
    const blob = await response.blob();

    // Create an object URL from the Blob
    const url = URL.createObjectURL(blob);

    // Create an invisible link element
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName; // Set the default name for the downloaded image
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Release the object URL
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to download image:", error);
  }
};

export default downloadImage;
