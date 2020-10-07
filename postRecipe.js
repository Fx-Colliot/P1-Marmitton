// form validation

let validate = {
    if (document.recipeForm.userName.value == '') {
        alert("Tu as oublié de renseigner ton nom");
        document.recipeForm.userName.focus();
        return false;
    }
    if (document.recipeForm.experience.value == '') {
        alert("Parle nous de ton expérience");
        document.recipeForm.experience.focus();
        return false;
    }
    if (document.recipeForm.userRecipe.value == '') {
        alert ("N'oublie pas d'indiquer le nom de ta recette");
        document.recipeForm.userRecipe.focus();
        return false;
    }
    if (document.recipeForm.ingredients.value == '') {
        alert ("Tu as oublié de renseigner les ingrédients");
        document.recipeForm.ingredients.focus();
        return false;
    }
    if (document.recipeForm.detailRecipe.value == '') {
        alert ("N'oublie pas de détailler les étapes de ta recette");
        document.recipeForm.detailRecipe.focus();
        return false;
    }
    return true;
};
