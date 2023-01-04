<script>
  import CreateStepForm from './CreateStepForm.svelte';

  export let step;
</script>

<h4>Step {step.orderNumber}</h4>
<CreateStepForm step={step} />
