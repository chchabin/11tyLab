module.exports = function(options = {}) {
    const width = options.width || "16";
    const height = options.height || "16";
    const className = options.class || "";

    return `<svg xmlns="http://www.w3.org/2000/svg" 
      width="${width}" 
      height="${height}" 
      class="${className}" 
      fill="currentColor" 
      viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>`;
}