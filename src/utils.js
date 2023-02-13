function validateFieldVoid (fields) {
    const error = {}
    Object.entries(fields).forEach(([key, value]) => {(!value) && (error[key] = "Поле обязательно для заполнения")
    })
    return error;
}       

function validateName (fields) {
    const error = {}
    Object.entries(fields).filter(([key, value]) => key === 'name' || key === 'surname').forEach(([key, value]) => {
        if (value && value[0] !== value[0].toUpperCase()) error[key] = 'Имя должно начинаться с большой буквы'})
    return error;
}

function validateTextarea (fields) {
    const error = {}
    Object.entries(fields).filter(([key, value]) => key === 'about' || key === 'technology' || key === 'project').forEach(([key, value]) => {
        if (value && value.length > 600) error[key] = 'Количество символов не должно превышать 600' 
    })
    return error;
}

function validateWeb (fields) {
    const regex = new RegExp("^https://");
    const error = {}
    if (fields.web && !regex.test(fields.web)) error.web = "Адрес должен быть введен в указанном формате 'https://...'";
    return error;
}

function validateNumber (fields) {
    const regex = new RegExp(
        "^[0-9]{1}[)]?[-s.][0-9]{4}[-s.][0-9]{2}[-s.][0-9]{2}$"
      );
    const error = {}
    if (fields.number && !regex.test(fields.number)) error.number = "Номер телефона должен быть введен в указанном формате '7-7777-77-77'";
    return error;
}

export function validateForm (fields) {
   const voidError = validateFieldVoid(fields);
   const nameError = validateName(fields)
   const textareaError = validateTextarea(fields)
   const webError = validateWeb(fields)
   const numberValidate = validateNumber(fields)
   const error = {...voidError, ...nameError, ...textareaError, ...webError, ...numberValidate} 
   return error;
}