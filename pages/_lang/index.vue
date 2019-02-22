<template>
  <div class="container sections-wrapper">
    <div class="row">
      <div class="primary col-lg-8 col-12">
        <About />
        <!--//section about-->
        <LatestProjects />
        <!--//section latest projects-->
        <PersonalProjects />
        <!--//section personal projects-->
        <section class="experience section">
          <div class="section-inner">
            <h2 class="heading">
              Work Experience
            </h2>
            <div class="content">
              <div class="item">
                <h3 class="title">
                  Co-Founder & Lead Developer -
                  <span class="place">
                    <a href="#">
                      Startup Hub
                    </a>
                  </span>
                  <span class="year">
                    (2014 - Present)
                  </span>
                </h3>
                <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.</p>
              </div>
              <!--//item-->
              <div class="item">
                <h3 class="title">
                  Software Engineer -
                  <span class="place">
                    <a href="#">
                      Google
                    </a>
                  </span>
                  <span class="year">
                    (2013 - 2014)
                  </span>
                </h3>
                <p>Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
              </div>
              <!--//item-->
              <div class="item">
                <h3 class="title">
                  Software Engineer -
                  <span class="place">
                    <a href="#">
                      eBay
                    </a>
                  </span>
                  <span class="year">
                    (2012 - 2013)
                  </span>
                </h3>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
              </div>
              <!--//item-->
            </div>
            <!--//content-->
          </div>
          <!--//section-inner-->
        </section>
        <!--//section-->
        <section class="github section">
          <div class="section-inner">
            <h2 class="heading">
              My GitHub
            </h2>
            <p>
              You can embed your GitHub contribution graph calendar using IonicaBizau's
              <a
                href="https://github.com/IonicaBizau/github-calendar"
                target="_blank"
              >
                GitHub Calendar
              </a>
              widget.
            </p>
            <div id="github-graph" class="github-graph" />
            <!--//github-graph-->
            <p>
              You can also embed your GitHub activities using Casey Scarborough's
              <a
                href="https://caseyscarborough.com/projects/github-activity/"
                target="_blank"
              >
                GitHub Activity Stream
              </a> widget.
              <!--//Usage: https://caseyscarborough.com/projects/github-activity/ -->
            </p>
            <div id="ghfeed" class="ghfeed" />
            <!--//ghfeed-->
          </div>
          <!--//secton-inner-->
        </section>
        <!--//section-->
      </div>
      <!--//primary-->
      <div class="secondary col-lg-4 col-12">
        <AdditionalInfo />
        <!--//aside aditional info-->
        <Skills />
        <!--//section skills-->
        <aside class="testimonials aside section">
          <div class="section-inner">
            <h2 class="heading">
              Testimonials
            </h2>
            <div class="content">
              <div class="item">
                <blockquote class="quote">
                  <p>
                    <i class="fas fa-quote-left" />James is an excellent software engineer and he is passionate about what he does. You can totally count on him to deliver your projects!
                  </p>
                </blockquote>
                <p class="source">
                  <span class="name">
                    Tim Adams
                  </span>
                  <br>
                  <span class="title">
                    Curabitur commodo
                  </span>
                </p>
              </div>
              <!--//item-->
              <p>
                <a class="more-link" href="#">
                  <i class="fas fa-external-link-alt" />More on Linkedin
                </a>
              </p>
            </div>
            <!--//content-->
          </div>
          <!--//section-inner-->
        </aside>
        <!--//section-->
        <aside class="education aside section">
          <div class="section-inner">
            <h2 class="heading">
              Education
            </h2>
            <div class="content">
              <div class="item">
                <h3 class="title">
                  <i class="fas fa-graduation-cap" /> MSc Computer Science
                </h3>
                <h4 class="university">
                  University College London
                  <span class="year">
                    (2011-2012)
                  </span>
                </h4>
              </div>
              <!--//item-->
              <div class="item">
                <h3 class="title">
                  <i class="fas fa-graduation-cap" /> BSc Computer Science
                </h3>
                <h4 class="university">
                  University of Bristol
                  <span class="year">
                    (2008-2011)
                  </span>
                </h4>
              </div>
              <!--//item-->
            </div>
            <!--//content-->
          </div>
          <!--//section-inner-->
        </aside>
        <!--//section-->
        <aside class="languages aside section">
          <div class="section-inner">
            <h2 class="heading">
              Languages
            </h2>
            <div class="content">
              <ul class="list-unstyled">
                <li class="item">
                  <span class="title">
                    <strong>English:</strong>
                  </span>
                  <span class="level">
                    Native Speaker
                    <br class="visible-xs">
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                  </span>
                </li>
                <!--//item-->
                <li class="item">
                  <span class="title">
                    <strong>Spanish:</strong>
                  </span>
                  <span class="level">
                    Professional Proficiency
                    <br class="visible-sm visible-xs">
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star-half" />
                  </span>
                </li>
                <!--//item-->
              </ul>
            </div>
            <!--//content-->
          </div>
          <!--//section-inner-->
        </aside>
        <!--//section-->
        <aside class="blog aside section">
          <div class="section-inner">
            <h2 class="heading">
              Latest Blog Posts
            </h2>
            <p>
              You can use Sascha Depold's
              <a
                href="https://github.com/sdepold/jquery-rss"
                target="_blank"
              >
                jQuery RSS plugin
              </a> to pull in your blog post feeds.
            </p>
            <div id="rss-feeds" class="content" />
            <!--//content-->
          </div>
          <!--//section-inner-->
        </aside>
        <!--//section-->
        <aside class="list music aside section">
          <div class="section-inner">
            <h2 class="heading">
              Favourite coding music
            </h2>
            <div class="content">
              <ul class="list-unstyled">
                <li>
                  <i class="fas fa-headphones" />
                  <a href="#">
                    Etiam hendrerit urna nunc
                  </a>
                </li>
                <li>
                  <i class="fas fa-headphones" />
                  <a href="#">
                    Ut sollicitudin in mauris non auctor
                  </a>
                </li>
                <li>
                  <i class="fas fa-headphones" />
                  <a href="#">
                    Etiam hendrerit urna nunc
                  </a>
                </li>
                <li>
                  <i class="fas fa-headphones" />
                  <a href="#">
                    Duis et felis bibendum
                  </a>
                </li>
              </ul>
            </div>
            <!--//content-->
          </div>
          <!--//section-inner-->
        </aside>
        <!--//section-->
        <aside class="list conferences aside section">
          <div class="section-inner">
            <h2 class="heading">
              Conferences
            </h2>
            <div class="content">
              <ul class="list-unstyled">
                <li>
                  <i class="far fa-calendar-alt" />
                  <a href="#" target="_blank">
                    WWDC 2014
                  </a> (San Francisco)
                </li>
                <li>
                  <i class="far fa-calendar-alt" />
                  <a href="#">
                    Hive
                  </a> (Seattle)
                </li>
              </ul>
            </div>
            <!--//content-->
          </div>
          <!--//section-inner-->
        </aside>
        <!--//section-->
        <aside class="credits aside section">
          <div class="section-inner">
            <h2 class="heading">
              Credits
            </h2>
            <div class="content">
              <ul class="list-unstyled pb-2">
                <li>
                  <a href="https://getbootstrap.com/" target="_blank">
                    <i class="fas fa-external-link-alt" />Bootstrap
                  </a>
                </li>
                <li>
                  <a href="https://fortawesome.github.io/Font-Awesome/" target="_blank">
                    <i class="fas fa-external-link-alt" />FontAwesome
                  </a>
                </li>
                <li>
                  <a href="https://jquery.com/" target="_blank">
                    <i class="fas fa-external-link-alt" />jQuery
                  </a>
                </li>
                <li>
                  <a href="https://github.com/IonicaBizau/github-calendar" target="_blank">
                    <i class="fas fa-external-link-alt" />GitHub Calendar Plugin
                  </a>
                </li>

                <li>
                  <a href="https://caseyscarborough.com/projects/github-activity/" target="_blank">
                    <i class="fas fa-external-link-alt" />GitHub Activity Stream
                  </a>
                </li>

                <li>
                  <a href="https://github.com/sdepold/jquery-rss" target="_blank">
                    <i class="fas fa-external-link-alt" />jQuery RSS
                  </a>
                </li>

                <li>
                  Profile image:
                  <a
                    href="https://www.flickr.com/photos/dotbenjamin/2577394151"
                    target="_blank"
                  >
                    Ben Smith
                  </a>
                </li>
              </ul>

              <hr>

              <p class="pt-2">
                This Bootstrap 4 portfolio template is handcrafted by UX designer
                <a
                  href="https://twitter.com/3rdwave_themes"
                  target="_blank"
                >
                  Xiaoying Riley
                </a> at
                <a href="https://themes.3rdwavemedia.com/" target="_blank">
                  3rd Wave Media
                </a> for developers and is
                <strong>FREE</strong> under the
                <a
                  class="dotted-link"
                  href="https://creativecommons.org/licenses/by/3.0/"
                  target="_blank"
                >
                  Creative Commons Attribution 3.0 License
                </a>
              </p>
              <p>
                If you’d like to
                <strong>use this template without the attribution link</strong>, you can
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap-portfolio-theme-for-web-developers/"
                  target="_blank"
                >
                  buy the commercial license
                </a>.
              </p>

              <a
                class="btn btn-cta-primary btn-download"
                href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap-portfolio-theme-for-web-developers/"
                target="_blank"
              >
                <i class="fas fa-download" /> I want to download
              </a>
              <hr>
              <h5 class="subheading pt-3">
                Want more free Bootstrap themes and templates?
              </h5>
              <p>
                Check out our
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/free/"
                >
                  collection of free themes and templates.
                </a>
              </p>
              <p>
                Follow
                <a href="https://twitter.com/3rdwave_themes" target="_blank">
                  Xiaoying
                </a> on twitter so you don't miss any future freebies!
              </p>

              <a
                class="btn btn-cta-secondary btn-follow"
                href="https://twitter.com/3rdwave_themes"
                target="_blank"
              >
                <i class="fab fa-twitter" /> Follow on twitter
              </a>
            </div>
            <!--//content-->
          </div>
          <!--//section-inner-->
        </aside>
        <!--//section-->
      </div>
      <!--//secondary-->
    </div>
    <!--//row-->
  </div>
</template>

<script>
import About from '~/components/About.vue'
import AdditionalInfo from '~/components/AdditionalInfo.vue'
import Skills from '~/components/Skills.vue'
import LatestProjects from '~/components/LatestProjects.vue'
import PersonalProjects from '~/components/PersonalProjects.vue'

export default {
  name: 'Index',
  components: {
    About,
    AdditionalInfo,
    Skills,
    LatestProjects,
    PersonalProjects
  }
}
</script>
