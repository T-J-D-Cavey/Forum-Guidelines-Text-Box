<!-- To only show custom HTML widget when on the topic creation page: -->
<script>
	if (window.location.href.includes('topic/new')) {
      const element = document.querySelector(".customHTMLContainer");
	  element.id = 'customHTMLContainerBlock';
    }
</script>
