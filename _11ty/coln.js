module.exports = function(content) {
    // Split content by the separator
    const columns = content.split('<--->');

    // Create column divs for each section
    const columnDivs = columns.map(column => `
      <div class="col">
        ${column}
      </div>
    `).join('');

    // Return the complete row structure
    return `
<div class="row align-items-start">
  ${columnDivs}
</div>`;
}