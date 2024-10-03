const tabs = () => {

  const tabHeaders = document.querySelectorAll('[data-tab')
  const contentBoxes = document.querySelectorAll('[data-tab-content]')

  tabHeaders.forEach(function(item) {
    item.addEventListener('click', function() {
      const noActive = document.querySelector('.mainthing__link--active')
      noActive.classList.remove('mainthing__link--active')
      this.classList.add('mainthing__link--active')

      contentBoxes.forEach(function(item) {
        item.classList.add('mainthing-mainthing')
      })

      const contentBox = document.querySelector('#' + this.dataset.tab)
      contentBox.classList.remove('mainthing-mainthing')
      
    })
  })

  const dataTab = document.querySelectorAll('[data-tab')
  const dataTabContent = document.querySelectorAll('[data-tab-content]')

  dataTab.forEach(function(item) {
    item.addEventListener('click', function() {
      const noActive = document.querySelector('.market-link--active')
      noActive.classList.remove('market-link--active')
      this.classList.add('market-link--active')

      dataTabContent.forEach(function(item) {
        item.classList.add('hidden')
      })

      const contentBox = document.querySelector('#' + this.dataset.tab)
      contentBox.classList.remove('hidden')
    })
  })

}

tabs()