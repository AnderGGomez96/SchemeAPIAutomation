export function mapNullable(value: any) {
    return value === 'null' ? null : value;
}

export function mapNullableNumber(value: any) {
    return value === 'null' ? null : 
        value === '' ? "" :
        isNaN(value) ? value : Number(value);
}

export function mapNullableDate(value: any) {
    return value === 'null' ? null : value === '' ? new Date().toISOString().slice(0, 23).replace('T', ' ') : value;
}

export function mapNullableBoolean(value: any) {
    return value === 'null' ? null : value === 'true' ? true : value === 'false' ? false : value;
}