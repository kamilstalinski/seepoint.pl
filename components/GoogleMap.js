const GoogleMap = () => {
  return (
    <div className='google-map'>
      <div className='mapouter'>
        <div className='gmap_canvas'>
          <iframe
            className='gmap_iframe'
            width='100%'
            frameborder='0'
            scrolling='no'
            marginheight='0'
            marginwidth='0'
            src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Seepoint, goleniów&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
          <a href='https://formatjson.org/'>format json</a>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
