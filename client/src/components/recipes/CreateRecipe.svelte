<script>
  import CreateRecipeForm from './CreateRecipeForm.svelte';

  const categories = [
    {
      id: 1,
      name: 'meat',
    },
    {
      id: 2,
      name: 'italian',
    },
  ];

  const steps = [
    {
      description: 'Description 1.',
      time: '250',
      orderNumber: 1,
    },
    {
      description: 'Description 2.',
      time: '100',
      orderNumber: 2,
    },
    {
      description: '',
      time: '',
      orderNumber: 3,
    },
  ];

  const handleFormSubmit = e => {
    console.log(e);
  };
</script>

<h2>Create recipe</h2>
<CreateRecipeForm categories={categories} steps={steps} />
