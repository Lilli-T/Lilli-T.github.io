"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Prepares to expand and collapse resume.
   */
  function init() {
    document.getElementById("expand-resume").addEventListener("click", expand);
    document.getElementById("collapse-resume").addEventListener("click", collapse);
  }

  /**
   * Expands the resume and allows for collapsing.
   */
  function expand() {
    document.getElementById("resume").classList.remove("hidden");
    document.getElementById("expand-resume").classList.add("hidden");
    document.getElementById("collapse-resume").classList.remove("hidden");
  }

  /**
   * Collapses the resume and allows for expanding.
   */
  function collapse() {
    document.getElementById("resume").classList.add("hidden");
    document.getElementById("expand-resume").classList.remove("hidden");
    document.getElementById("collapse-resume").classList.add("hidden");
  }

})();