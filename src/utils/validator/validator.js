export const ValidateList = validators => value => {
    for(const func of validators) {
        const checkForError = func(value);
        if(checkForError) return checkForError;
    }

   return undefined;
}

export const maxLength = maxLength => value => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbol`;
}

export const nameHasSpaces = (name) => {
    let result = /\s/.test(name.trim());
    if(result) return 'name should not has spaces';
}

export const nameIsEmpty = (name) => {
    if(!name.trim()) return 'name is empty';
}
