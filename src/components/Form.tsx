import { createForm, SubmitHandler } from '@modular-forms/solid';

type BountyForm = {
  name: string;
  email: string;
  idea: string;
};

export default function Form() {
  const [, { Form, Field }] = createForm<BountyForm>();

  const handleSubmit: SubmitHandler<BountyForm> = (values) => {
    // eslint-disable-next-line
    const submit = fetch('/api/idea', {
      method: 'POST',
      body: JSON.stringify(values),
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <div class="field label border">
          <Field name="name">
            {(_field, props) => <input {...props} type="text" />}
          </Field>
          <label>Name</label>
        </div>
        <div class="field label border">
          <Field name="email">
            {(_field, props) => <input {...props} type="email" />}
          </Field>
          <label>Email</label>
        </div>
        <div class="field label border textarea">
          <Field name="idea">
            {(_field, props) => <textarea {...props} />}
          </Field>
          <label>Idea</label>
          <span class="helper">
            Please include any links to example website or materials.
          </span>
        </div>
        <div class="space" />
        <button>Submit</button>
      </fieldset>
    </Form>
  );
}
