<script>
  /**
   * @type {HTMLImageElement}
   */
  let responsive_element;

  /**
   * @type {string}
   */
  let asset_link;

  /**
   * @type {number}
   */

  let viewport_width;

  // Import onMount from Svelte
  import { onMount } from "svelte";

  onMount(() => {
    // Get the current src of the image being displayed
    asset_link = responsive_element.currentSrc;
  });

  // Console log the filename
  // $: filename = (asset_link ? asset_link.split("/").pop() ?? "" : "");

</script>

<svelte:window bind:innerWidth={viewport_width} />

<h1>SEO Best Practices - Serving Responsive Images</h1>
<h2>
  At smaller screen sizes, more compact versions of the same image can be served
  to boost site performance
</h2>

<h3>Current viewport width:</h3>
<p>{viewport_width}</p>

<!-- <img

  src="$lib/images/300x200.webp"
  srcset="$lib/images/300x200.webp 320w,
  $lib/images/600x400.webp 600w,
  $lib/images/1200x800.webp 1200w"
  sizes="(max-width: 320px): 300px,
  (max-width: 600px): 600px,
  (max-width: 1200px): 1200px,
  600px"
  alt="Placeholder"
  title="Placeholder"
/> -->

<!-- Convert the img element above to <picture> tag -->

<picture title="Placeholder">
  <source media="(max-width: 320px)" srcset="$lib/images/300x200.webp" />
  <source media="(max-width: 600px)" srcset="$lib/images/600x400.webp" />
  <source media="(max-width: 1200px)" srcset="$lib/images/1200x800.webp" />
  <img id="test-image" bind:this={responsive_element} src="$lib/images/1200x800.webp" alt="Placeholder" title="Placeholder" />
</picture>

<style>
  #test-image {
    width: 100%;
    height: auto;
  }
</style>