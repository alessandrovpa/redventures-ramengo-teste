class ListItemManagement{
  createListItem(id, imageUrl, name, description, price, inputName){
    const listItem = document.createElement("li");
    
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = inputName;
    radioInput.id = id;
    radioInput.value = id;
    radioInput.required = true;
    
    const label = document.createElement("label");
    label.htmlFor = id;
    
    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = name;
    image.id = id;
    
    const heading3 = document.createElement("h3");
    heading3.textContent = name;
    
    const heading4 = document.createElement("h4");
    heading4.textContent = description;
    
    const heading5 = document.createElement("h5");
    heading5.textContent = `US$ ${price}`;
    
    label.appendChild(image);
    label.appendChild(heading3);
    label.appendChild(heading4);
    label.appendChild(heading5);
    
    listItem.appendChild(radioInput);
    listItem.appendChild(label);
    
    return listItem;
  }
}