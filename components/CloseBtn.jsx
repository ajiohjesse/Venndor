const CloseBtn = props => {
  return (
    <button {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        width="1em"
        viewBox="0 0 45.163 45.163"
      >
        <path
          id="closeIcon"
          d="M35.918,46.031,25.544,35.656,15.169,46.031A7.151,7.151,0,0,1,5.056,35.918L15.431,25.543,5.056,15.169A7.151,7.151,0,0,1,15.169,5.056L25.543,15.431,35.918,5.056A7.151,7.151,0,1,1,46.031,15.17L35.656,25.544,46.031,35.918A7.151,7.151,0,1,1,35.918,46.031Z"
          transform="translate(-2.962 -2.962)"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default CloseBtn;
