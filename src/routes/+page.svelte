<script>
  export let data;

  // Import the user agent from the data object
  let user_agent = data.user_agent ?? "";

  // Use device-detector-js to parse the user agent
  import DeviceDetector from "device-detector-js";
  const deviceDetector = new DeviceDetector();
  $: device = deviceDetector.parse(user_agent);
  $: console.log(device);

  /**
   * @type {HTMLImageElement}
   */
  let responsive_element;

  let asset_link = "";

  let viewport_width = 0;

  // Import onMount from Svelte
  import { onMount } from "svelte";

  onMount(() => {
    // Get the current src of the image being displayed
    asset_link = responsive_element.currentSrc;
  });

  // Console log the filename
  $: filename = asset_link ? asset_link.split("/").pop() ?? "" : "";
</script>

<svelte:window bind:innerWidth={viewport_width} />

<h1>SEO Best Practices - Serving Responsive Images</h1>
<h2>
  At smaller screen sizes, more compact versions of the same image can be served
  to boost site performance
</h2>

<h3>Current viewport width:</h3>
<p>{viewport_width}</p>

<h3>Current user agent:</h3>
<p>{user_agent}</p>

<h3>Image initially loaded based on the starting viewport width:</h3>
<!-- Create <picture> tag -->
<picture>
  <source
    media="(max-width: 320px)"
    type="image/webp"
    srcset="$lib/images/300x200.webp"
  />
  <source
    media="(max-width: 600px)"
    type="image/webp"
    srcset="$lib/images/600x400.webp"
  />
  <source
    media="(max-width: 1200px)"
    type="image/webp"
    srcset="$lib/images/1200x800.webp"
  />
  <img
    id="test-image"
    bind:this={responsive_element}
    src="$lib/images/1200x800.webp"
    alt="Placeholder"
    title="Placeholder"
  />
</picture>

<style>
  #test-image {
    width: 100%;
    height: auto;
  }
</style>
