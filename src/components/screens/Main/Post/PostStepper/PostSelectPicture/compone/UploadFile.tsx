const UploadFile = ({ onFileLoaded }: any) => {
  const handleLoadLocalFile = (event: any) => {
    event.preventDefault();
    const file = event.target.files[0];
    const localImageUrl = window.URL.createObjectURL(file);
    onFileLoaded(localImageUrl);
  };

  return (
    <div>
      <label className="upload-file" htmlFor="my-upload-btn">
        <input
          id="my-upload-btn"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleLoadLocalFile}
        />
      </label>
    </div>
  );
};

export default UploadFile;
