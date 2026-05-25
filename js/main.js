const portfolioProjects = {
  hospitals: {
    title: 'Hospitals',
    items: [
      {
        name: 'Lotus Valley Medical Centre',
        image: 'https://images.unsplash.com/photo-1519494026892-80bfd58d0afe?w=800&q=80',
        description: 'A 180-bed multispecialty hospital in Noida with naturally ventilated wards and a healing garden atrium.'
      },
      {
        name: 'Sapphire Diagnostic Hub',
        image: 'https://images.unsplash.com/photo-1586773860418-d47a29e8d907?w=800&q=80',
        description: 'Outpatient diagnostics block in Pune featuring streamlined circulation and warm terracotta cladding.'
      },
      {
        name: 'Greenline Maternity Wing',
        image: 'https://images.unsplash.com/photo-1538108149393-fbbd818ea204?w=800&q=80',
        description: 'Maternity and neonatal care expansion in Jaipur with family lounges and soft daylight planning.'
      }
    ]
  },
  institutions: {
    title: 'Institutions',
    items: [
      {
        name: 'Riverside Public School Campus',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
        description: 'K-12 campus in Dehradun combining open courtyards, modular classrooms, and shaded play zones.'
      },
      {
        name: 'National Arts & Science Block',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
        description: 'University laboratory and gallery wing in Bengaluru with flexible studios and collaborative forums.'
      },
      {
        name: 'Heritage Library Restoration',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
        description: 'Adaptive reuse of a colonial-era reading hall in Kolkata with contemporary glass study pods.'
      }
    ]
  },
  restaurants: {
    title: 'Restaurants',
    items: [
      {
        name: 'Masala Terrace Kitchen',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
        description: 'Rooftop fine-dining venue in Mumbai with open kitchen views and handcrafted brass detailing.'
      },
      {
        name: 'Copper Lane Café',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
        description: 'Neighbourhood café in Hyderabad blending exposed brick, terrazzo floors, and indoor planting.'
      },
      {
        name: 'Coastal Spice House',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
        description: 'Seafood restaurant in Kochi with bamboo screens, lagoon views, and climate-responsive shading.'
      }
    ]
  }
};

function toggleMenu() {
  document.getElementById('dropdown-menu').classList.toggle('show');
}

function hideAllSections() {
  document.querySelectorAll('.section').forEach(function (section) {
    section.classList.remove('show-section');
  });
}

function showHome() {
  hideAllSections();
  document.getElementById('home').classList.add('show-section');
  document.querySelector('.hero').classList.remove('hide');
  document.getElementById('dropdown-menu').classList.remove('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSection(sectionId) {
  hideAllSections();
  document.querySelector('.hero').classList.add('hide');
  var selected = document.getElementById(sectionId);
  if (selected) {
    selected.classList.add('show-section');
  }
  document.getElementById('dropdown-menu').classList.remove('show');
  if (sectionId === 'portfolio') {
    backToCategories();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showProjects(category) {
  var data = portfolioProjects[category];
  if (!data) return;

  document.querySelector('.portfolio-categories').classList.add('hide');
  var grid = document.getElementById('projects-grid');
  var container = document.getElementById('projects-container');
  var title = document.getElementById('category-title');

  title.textContent = data.title;
  container.innerHTML = '';

  data.items.forEach(function (project) {
    var card = document.createElement('div');
    card.className = 'project-card';
    card.style.backgroundImage = "url('" + project.image + "')";
    card.innerHTML = '<div class="overlay">' + project.name + '</div>';
    card.addEventListener('click', function () {
      openProjectModal(project);
    });
    container.appendChild(card);
  });

  grid.classList.remove('hide');
}

function backToCategories() {
  document.querySelector('.portfolio-categories').classList.remove('hide');
  document.getElementById('projects-grid').classList.add('hide');
  document.getElementById('projects-container').innerHTML = '';
}

function openProjectModal(project) {
  var modal = document.getElementById('project-modal');
  document.getElementById('modal-image').src = project.image;
  document.getElementById('modal-image').alt = project.name;
  document.getElementById('modal-title').textContent = project.name;
  document.getElementById('modal-description').textContent = project.description;
  modal.classList.add('active');
}

function closeProjectModal() {
  document.getElementById('project-modal').classList.remove('active');
}

function handleContactSubmit(event) {
  event.preventDefault();
  var notice = document.getElementById('form-notice');
  notice.textContent = 'Dhanyavaad! This is a demo site — your message was not sent.';
  notice.style.color = '#00e0ff';
  event.target.reset();
}

window.addEventListener('click', function (event) {
  var menu = document.getElementById('dropdown-menu');
  var menuIcon = document.querySelector('.menu-icon');
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.classList.remove('show');
  }

  var modal = document.getElementById('project-modal');
  if (event.target === modal) {
    closeProjectModal();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', handleContactSubmit);
  }

  if (typeof gsap !== 'undefined') {
    gsap.from('.hero-title', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.cta-button', { opacity: 0, y: 50, delay: 1, duration: 1 });
  }
});
