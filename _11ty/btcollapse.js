module.exports = function(content, id = "id0", cssClass = "success", buttonText = "Afficher le code") {
    return `
<p>
    <button class="btn btn-${cssClass}" type="button" data-bs-toggle="collapse" 
            data-bs-target="#${id}" aria-expanded="false" aria-controls="${id}">
        ${buttonText}
    </button>
</p>
<div class="collapse" id="${id}">
    <div class="card card-body">
        ${content}
    </div>
</div>`;
}