'use server';

export async function shareMeal(formData: FormData) {
    'use server';

    const meal = {
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        title: formData.get('title'),
        summary: formData.get('summary'),
        image: formData.get('image'),
        instructions: formData.get('instructions'),

    }
    

}