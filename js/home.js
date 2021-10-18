const alertOnload = () => {
  window.addEventListener("load", () => {
    swal({
      title: " Souriez, ",
      text: " Toutes les livraisons sont offertes ! ",
      icône: " avertissement ",
      dangerMode: true,
    });
  });
};
alertOnload();
