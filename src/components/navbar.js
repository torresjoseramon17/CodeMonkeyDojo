import React from 'react';

const Navbar = () =>(

  <div class="w3-top">
    <div class="w3-bar" id="myNavbar">
      <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
        <i class="fa fa-bars"></i>
      </a>
      <a href="tutorials.html" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> HOME</a>
      <a href="#home" class="w3-bar-item w3-button">TUTORIALS</a>
      <a href="https://www.facebook.com/DataDisc/app/202980683107053/?ref=page_internal" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> FORUM</a>
      <a href="submitTutorial.html" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> SUBMIT TUTORIAL</a>
<<<<<<< HEAD
      <a href="TEST.html" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i>ABOUT PAGE</a>
      <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
=======
      <a href="https://cse.google.com/cse?q=+&cx=018245947221930021913:rnypbaaqfau" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
>>>>>>> 26ea383b2158b0e842b9bf18210d34bbf2ddac2d
        <i class="fa fa-search"></i>

        {/*}<script>
  (function() {
    var cx = '018245947221930021913:rnypbaaqfau';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>*/}

      </a>
    </div>
    </div>
)


export default Navbar;
