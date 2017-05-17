





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-81a59bf26d881d29286674f6deefe779c444382fff322085b50ba455460ccae5.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-bf92078463fbaccc99b6cbeb3f7d032866dbbe4d3977f7f47c3b403b8598dda8.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-305da239d9594c987edb45691bee8e64ab6e76c2649f5f82dc9eaa49b5e4ed50.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>js-sequence-diagrams/sequence-diagram-raphael.js at master · bramp/js-sequence-diagrams · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars0.githubusercontent.com/u/160627?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="bramp/js-sequence-diagrams" property="og:title" /><meta content="https://github.com/bramp/js-sequence-diagrams" property="og:url" /><meta content="js-sequence-diagrams - Draws simple SVG sequence diagrams from textual representation of the diagram" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="D0F3:7D5A:D07574:1393EB0:591C8222" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="D0F3:7D5A:D07574:1393EB0:591C8222" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="N2VhMzZhZTA5YTU1ZGY2YmY1NGRkZWYyOTdlMGIxYzg3NTdjZGRjNTE1MmVlY2NiNGQxNTE1NzBlMzMzZjllYXx7InJlbW90ZV9hZGRyZXNzIjoiNzQuODguMTMyLjg0IiwicmVxdWVzdF9pZCI6IkQwRjM6N0Q1QTpEMDc1NzQ6MTM5M0VCMDo1OTFDODIyMiIsInRpbWVzdGFtcCI6MTQ5NTA0MDU0NiwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="ee5f47771830d4f716910bf2695dd9a370c71e93">

  <meta http-equiv="x-pjax-version" content="93a7fdefece400510fd03592dfd57d6a">
  

    
  <meta name="description" content="js-sequence-diagrams - Draws simple SVG sequence diagrams from textual representation of the diagram">
  <meta name="go-import" content="github.com/bramp/js-sequence-diagrams git https://github.com/bramp/js-sequence-diagrams.git">

  <meta content="160627" name="octolytics-dimension-user_id" /><meta content="bramp" name="octolytics-dimension-user_login" /><meta content="6736646" name="octolytics-dimension-repository_id" /><meta content="bramp/js-sequence-diagrams" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6736646" name="octolytics-dimension-repository_network_root_id" /><meta content="bramp/js-sequence-diagrams" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/bramp/js-sequence-diagrams/commits/master.atom" rel="alternate" title="Recent Commits to js-sequence-diagrams:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/bramp/js-sequence-diagrams/blob/master/dist/sequence-diagram-raphael.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
          Features
</a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/bramp/js-sequence-diagrams/search" class="js-site-search-form" data-scoped-search-url="/bramp/js-sequence-diagrams/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/bramp/js-sequence-diagrams/blob/master/dist/sequence-diagram-raphael.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2Fbramp%2Fjs-sequence-diagrams%2Fblob%2Fmaster%2Fdist%2Fsequence-diagram-raphael.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        



    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fbramp%2Fjs-sequence-diagrams"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/bramp/js-sequence-diagrams/watchers"
     aria-label="216 users are watching this repository">
    216
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fbramp%2Fjs-sequence-diagrams"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/bramp/js-sequence-diagrams/stargazers"
      aria-label="4814 users starred this repository">
      4,814
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fbramp%2Fjs-sequence-diagrams"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/bramp/js-sequence-diagrams/network" class="social-count"
       aria-label="639 users forked this repository">
      639
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/bramp" class="url fn" rel="author">bramp</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/bramp/js-sequence-diagrams" data-pjax="#js-repo-pjax-container">js-sequence-diagrams</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/bramp/js-sequence-diagrams" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /bramp/js-sequence-diagrams" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/bramp/js-sequence-diagrams/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /bramp/js-sequence-diagrams/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">56</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/bramp/js-sequence-diagrams/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /bramp/js-sequence-diagrams/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">11</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/bramp/js-sequence-diagrams/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /bramp/js-sequence-diagrams/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>



  <a href="/bramp/js-sequence-diagrams/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /bramp/js-sequence-diagrams/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/bramp/js-sequence-diagrams/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /bramp/js-sequence-diagrams/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
          

<a href="/bramp/js-sequence-diagrams/blob/78e00d3ab64c636fd99768d4ec77ff88d1c85036/dist/sequence-diagram-raphael.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:e96917f978b5d4b326223c46e27041ba -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bramp/js-sequence-diagrams/blob/gh-pages/dist/sequence-diagram-raphael.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/bramp/js-sequence-diagrams/blob/master/dist/sequence-diagram-raphael.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bramp/js-sequence-diagrams/blob/newfont/dist/sequence-diagram-raphael.js"
               data-name="newfont"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                newfont
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bramp/js-sequence-diagrams/blob/real-tests/dist/sequence-diagram-raphael.js"
               data-name="real-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                real-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/bramp/js-sequence-diagrams/blob/svg/dist/sequence-diagram-raphael.js"
               data-name="svg"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                svg
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bramp/js-sequence-diagrams/tree/v2.0.1/dist/sequence-diagram-raphael.js"
              data-name="v2.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.1">
                v2.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bramp/js-sequence-diagrams/tree/v2.0.0/dist/sequence-diagram-raphael.js"
              data-name="v2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0">
                v2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bramp/js-sequence-diagrams/tree/v1.0.6/dist/sequence-diagram-raphael.js"
              data-name="v1.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.6">
                v1.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bramp/js-sequence-diagrams/tree/v1.0.5/dist/sequence-diagram-raphael.js"
              data-name="v1.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.5">
                v1.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bramp/js-sequence-diagrams/tree/v1.0.4/dist/sequence-diagram-raphael.js"
              data-name="v1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.4">
                v1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bramp/js-sequence-diagrams/tree/v1.0.3/dist/sequence-diagram-raphael.js"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bramp/js-sequence-diagrams/tree/v1.0.2/dist/sequence-diagram-raphael.js"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bramp/js-sequence-diagrams/tree/v1.0.1/dist/sequence-diagram-raphael.js"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/bramp/js-sequence-diagrams/tree/v1.0/dist/sequence-diagram-raphael.js"
              data-name="v1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0">
                v1.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/bramp/js-sequence-diagrams/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/bramp/js-sequence-diagrams"><span>js-sequence-diagrams</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/bramp/js-sequence-diagrams/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">sequence-diagram-raphael.js</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/bramp/js-sequence-diagrams/commit/a6c252b2ed0d1e6b1d16be066f582afd2895e6c9" data-pjax>
          a6c252b
        </a>
        <relative-time datetime="2016-12-27T07:26:27Z">Dec 27, 2016</relative-time>
      </span>
      <div>
        <img alt="@bramp" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/160627?v=3&amp;s=40" width="20" />
        <a href="/bramp" class="user-mention" rel="author">bramp</a>
          <a href="/bramp/js-sequence-diagrams/commit/a6c252b2ed0d1e6b1d16be066f582afd2895e6c9" class="message" data-pjax="true" title="Released version 2.0.1">Released version 2.0.1</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@bramp" height="24" src="https://avatars0.githubusercontent.com/u/160627?v=3&amp;s=48" width="24" />
            <a href="/bramp">bramp</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/bramp/js-sequence-diagrams/raw/master/dist/sequence-diagram-raphael.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/bramp/js-sequence-diagrams/blame/master/dist/sequence-diagram-raphael.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/bramp/js-sequence-diagrams/commits/master/dist/sequence-diagram-raphael.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      2455 lines (2241 sloc)
      <span class="file-info-divider"></span>
    120 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/** js sequence diagrams 2.0.1</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  https://bramp.github.io/js-sequence-diagrams/</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  (c) 2012-2017 Andrew Brampton (bramp.net)</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  <span class="pl-k">@license</span> <span class="pl-smi">Simplified</span> BSD license.</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*global Diagram */</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> The following are included by preprocessor */</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/** js sequence diagrams</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  https://bramp.github.io/js-sequence-diagrams/</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  (c) 2012-2017 Andrew Brampton (bramp.net)</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Simplified BSD license.</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*global grammar _ */</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Diagram</span>() {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-c1">title</span>   <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">actors</span>  <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">signals</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Return an existing actor with this alias, or creates a new one with alias and name.</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getActor</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">alias</span>, <span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">  alias <span class="pl-k">=</span> <span class="pl-smi">alias</span>.<span class="pl-en">trim</span>();</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> i;</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> actors <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">actors</span>;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (i <span class="pl-k">in</span> actors) {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (actors[i].<span class="pl-smi">alias</span> <span class="pl-k">==</span> alias) {</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> actors[i];</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">  i <span class="pl-k">=</span> <span class="pl-smi">actors</span>.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">Diagram.Actor</span>(alias, (name <span class="pl-k">||</span> alias), <span class="pl-smi">actors</span>.<span class="pl-c1">length</span>));</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> actors[ i <span class="pl-k">-</span> <span class="pl-c1">1</span> ];</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Parses the input as either a alias, or a &quot;name as alias&quot;, and returns the corresponding actor.</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getActorWithAlias</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">input</span>) {</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">  input <span class="pl-k">=</span> <span class="pl-smi">input</span>.<span class="pl-en">trim</span>();</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> We are lazy and do some of the parsing in javascript :(. TODO move into the .jison file.</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> s <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">+</span>) as (<span class="pl-c1">\S</span><span class="pl-k">+</span>)<span class="pl-k">$</span><span class="pl-pds">/</span>im</span>.<span class="pl-c1">exec</span>(input);</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> alias;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> name;</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (s) {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    name  <span class="pl-k">=</span> s[<span class="pl-c1">1</span>].<span class="pl-en">trim</span>();</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    alias <span class="pl-k">=</span> s[<span class="pl-c1">2</span>].<span class="pl-en">trim</span>();</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    name <span class="pl-k">=</span> alias <span class="pl-k">=</span> input;</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">getActor</span>(alias, name);</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">setTitle</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">title</span>) {</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> title;</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">addSignal</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">signal</span>) {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">signals</span>.<span class="pl-c1">push</span>(signal);</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-en">Actor</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">alias</span>, <span class="pl-smi">name</span>, <span class="pl-smi">index</span>) {</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">alias</span> <span class="pl-k">=</span> alias;</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-c1">name</span>  <span class="pl-k">=</span> name;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-c1">index</span> <span class="pl-k">=</span> index;</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-en">Signal</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">actorA</span>, <span class="pl-smi">signaltype</span>, <span class="pl-smi">actorB</span>, <span class="pl-smi">message</span>) {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-c1">type</span>       <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Signal<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">actorA</span>     <span class="pl-k">=</span> actorA;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">actorB</span>     <span class="pl-k">=</span> actorB;</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">linetype</span>   <span class="pl-k">=</span> signaltype <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">arrowtype</span>  <span class="pl-k">=</span> (signaltype <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">message</span>    <span class="pl-k">=</span> message;</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-smi">Signal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">isSelf</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">actorA</span>.<span class="pl-c1">index</span> <span class="pl-k">==</span> <span class="pl-c1">this</span>.<span class="pl-smi">actorB</span>.<span class="pl-c1">index</span>;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-en">Note</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">actor</span>, <span class="pl-smi">placement</span>, <span class="pl-smi">message</span>) {</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-c1">type</span>      <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Note<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">actor</span>     <span class="pl-k">=</span> actor;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">placement</span> <span class="pl-k">=</span> placement;</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">message</span>   <span class="pl-k">=</span> message;</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-en">hasManyActors</span>() <span class="pl-k">&amp;&amp;</span> actor[<span class="pl-c1">0</span>] <span class="pl-k">==</span> actor[<span class="pl-c1">1</span>]) {</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Note should be over two different actors<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-smi">Note</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">hasManyActors</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">isArray</span>(<span class="pl-c1">this</span>.<span class="pl-smi">actor</span>);</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-en">unescape</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>) {</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Turn &quot;\\n&quot; into &quot;\n&quot;</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-smi">s</span>.<span class="pl-en">trim</span>().<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&quot;(<span class="pl-c1">.</span><span class="pl-k">*</span>)&quot;<span class="pl-k">$</span><span class="pl-pds">/</span>m</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\\</span>n<span class="pl-pds">/</span>gm</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-c1">LINETYPE</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">SOLID</span><span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">DOTTED</span><span class="pl-k">:</span> <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-c1">ARROWTYPE</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">FILLED</span><span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">OPEN</span><span class="pl-k">:</span> <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-c1">PLACEMENT</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">LEFTOF</span><span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">RIGHTOF</span><span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">OVER</span><span class="pl-k">:</span> <span class="pl-c1">2</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Some older browsers don&#39;t have getPrototypeOf, thus we polyfill it</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> https://github.com/bramp/js-sequence-diagrams/issues/57</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> https://github.com/zaach/jison/issues/194</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Taken from http://ejohn.org/blog/objectgetprototypeof/</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">Object</span>.<span class="pl-smi">getPrototypeOf</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/* jshint -W103 */</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-s"><span class="pl-pds">&#39;</span>test<span class="pl-pds">&#39;</span></span>.<span class="pl-smi">__proto__</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">Object</span>.<span class="pl-en">getPrototypeOf</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">object</span>) {</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">object</span>.<span class="pl-smi">__proto__</span>;</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">Object</span>.<span class="pl-en">getPrototypeOf</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">object</span>) {</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> May break if the constructor has been tampered with</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">object</span>.<span class="pl-c1">constructor</span>.<span class="pl-c1">prototype</span>;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/* jshint +W103 */</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/** The following is included by preprocessor */</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/* parser generated by jison 0.4.15 */</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  Returns a Parser object of the following structure:</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  Parser: {</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    yy: {}</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  }</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  Parser.prototype: {</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    yy: {},</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    trace: function(),</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    symbols_: {associative list: name ==&gt; number},</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    terminals_: {associative list: number ==&gt; name},</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    productions_: [...],</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    table: [...],</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    defaultActions: {...},</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    parseError: function(str, hash),</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    parse: function(input),</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    lexer: {</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        EOF: 1,</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        parseError: function(str, hash),</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        setInput: function(input),</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        input: function(),</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        unput: function(str),</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        more: function(),</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        less: function(n),</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        pastInput: function(),</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        upcomingInput: function(),</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        showPosition: function(),</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        test_match: function(regex_match_array, rule_index),</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        next: function(),</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        lex: function(),</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        begin: function(condition),</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        popState: function(),</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        _currentRules: function(),</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        topState: function(),</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        pushState: function(condition),</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        options: {</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            ranges: boolean           (optional: true ==&gt; token location info will include a .range[] member)</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            flex: boolean             (optional: true ==&gt; flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            backtrack_lexer: boolean  (optional: true ==&gt; lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        },</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        rules: [...],</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        conditions: {associative list: name ==&gt; set},</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    }</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  }</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  token location info (@$, _$, etc.): {</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    first_line: n,</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    last_line: n,</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    first_column: n,</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    last_column: n,</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  }</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  the parseError function receives a &#39;hash&#39; object with these members for lexer and parser errors: {</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    text:        (matched text)</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    token:       (the produced terminal token, if any)</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    line:        (yylineno)</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  }</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    loc:         (yylloc)</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    expected:    (string describing the set of expected tokens)</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  }</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">parser</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">Parser</span>() {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">yy</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">o</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">k</span>, <span class="pl-smi">v</span>, <span class="pl-smi">o</span>, <span class="pl-smi">l</span>) {</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (o <span class="pl-k">=</span> o <span class="pl-k">||</span> {}, l <span class="pl-k">=</span> <span class="pl-smi">k</span>.<span class="pl-c1">length</span>; l<span class="pl-k">--</span>; o[k[l]] <span class="pl-k">=</span> v) ;</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> o;</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-c1">$V0</span> <span class="pl-k">=</span> [ <span class="pl-c1">5</span>, <span class="pl-c1">8</span>, <span class="pl-c1">9</span>, <span class="pl-c1">13</span>, <span class="pl-c1">15</span>, <span class="pl-c1">24</span> ], <span class="pl-c1">$V1</span> <span class="pl-k">=</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">13</span> ], <span class="pl-c1">$V2</span> <span class="pl-k">=</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">17</span> ], <span class="pl-c1">$V3</span> <span class="pl-k">=</span> [ <span class="pl-c1">24</span>, <span class="pl-c1">29</span>, <span class="pl-c1">30</span> ], parser <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">trace</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {},</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">        yy<span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">        symbols_<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">            error<span class="pl-k">:</span> <span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">            start<span class="pl-k">:</span> <span class="pl-c1">3</span>,</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">document</span><span class="pl-k">:</span> <span class="pl-c1">4</span>,</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">EOF</span><span class="pl-k">:</span> <span class="pl-c1">5</span>,</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">            line<span class="pl-k">:</span> <span class="pl-c1">6</span>,</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">            statement<span class="pl-k">:</span> <span class="pl-c1">7</span>,</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">NL</span><span class="pl-k">:</span> <span class="pl-c1">8</span>,</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">            participant<span class="pl-k">:</span> <span class="pl-c1">9</span>,</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">            actor_alias<span class="pl-k">:</span> <span class="pl-c1">10</span>,</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">            signal<span class="pl-k">:</span> <span class="pl-c1">11</span>,</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">            note_statement<span class="pl-k">:</span> <span class="pl-c1">12</span>,</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">            title<span class="pl-k">:</span> <span class="pl-c1">13</span>,</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">            message<span class="pl-k">:</span> <span class="pl-c1">14</span>,</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">            note<span class="pl-k">:</span> <span class="pl-c1">15</span>,</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">            placement<span class="pl-k">:</span> <span class="pl-c1">16</span>,</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">            actor<span class="pl-k">:</span> <span class="pl-c1">17</span>,</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">            over<span class="pl-k">:</span> <span class="pl-c1">18</span>,</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">            actor_pair<span class="pl-k">:</span> <span class="pl-c1">19</span>,</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">20</span>,</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">            left_of<span class="pl-k">:</span> <span class="pl-c1">21</span>,</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">            right_of<span class="pl-k">:</span> <span class="pl-c1">22</span>,</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">            signaltype<span class="pl-k">:</span> <span class="pl-c1">23</span>,</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">ACTOR</span><span class="pl-k">:</span> <span class="pl-c1">24</span>,</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">            linetype<span class="pl-k">:</span> <span class="pl-c1">25</span>,</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">            arrowtype<span class="pl-k">:</span> <span class="pl-c1">26</span>,</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">LINE</span><span class="pl-k">:</span> <span class="pl-c1">27</span>,</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">DOTLINE</span><span class="pl-k">:</span> <span class="pl-c1">28</span>,</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">ARROW</span><span class="pl-k">:</span> <span class="pl-c1">29</span>,</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">OPENARROW</span><span class="pl-k">:</span> <span class="pl-c1">30</span>,</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">MESSAGE</span><span class="pl-k">:</span> <span class="pl-c1">31</span>,</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">            $accept<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">            $end<span class="pl-k">:</span> <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">        terminals_<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>EOF<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">8</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>NL<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>participant<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>title<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">15</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>note<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">18</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>over<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">20</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">21</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>left_of<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">22</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>right_of<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ACTOR<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">27</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>LINE<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">28</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>DOTLINE<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">29</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ARROW<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">30</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>OPENARROW<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">31</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>MESSAGE<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">        productions_<span class="pl-k">:</span> [ <span class="pl-c1">0</span>, [ <span class="pl-c1">3</span>, <span class="pl-c1">2</span> ], [ <span class="pl-c1">4</span>, <span class="pl-c1">0</span> ], [ <span class="pl-c1">4</span>, <span class="pl-c1">2</span> ], [ <span class="pl-c1">6</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">6</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">7</span>, <span class="pl-c1">2</span> ], [ <span class="pl-c1">7</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">7</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">7</span>, <span class="pl-c1">2</span> ], [ <span class="pl-c1">12</span>, <span class="pl-c1">4</span> ], [ <span class="pl-c1">12</span>, <span class="pl-c1">4</span> ], [ <span class="pl-c1">19</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">19</span>, <span class="pl-c1">3</span> ], [ <span class="pl-c1">16</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">16</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">11</span>, <span class="pl-c1">4</span> ], [ <span class="pl-c1">17</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">10</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">23</span>, <span class="pl-c1">2</span> ], [ <span class="pl-c1">23</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">25</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">25</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">26</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">26</span>, <span class="pl-c1">1</span> ], [ <span class="pl-c1">14</span>, <span class="pl-c1">1</span> ] ],</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">performAction</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">yytext</span>, <span class="pl-smi">yyleng</span>, <span class="pl-smi">yylineno</span>, <span class="pl-smi">yy</span>, <span class="pl-smi">yystate</span>, <span class="pl-smi">$$</span>, <span class="pl-smi">_$</span>) {</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/* this == yyval */</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> $0 <span class="pl-k">=</span> <span class="pl-smi">$$</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">switch</span> (yystate) {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">1</span>:</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-smi">yy</span>.<span class="pl-smi">parser</span>.<span class="pl-smi">yy</span>;</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">4</span>:</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">6</span>:</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">                $$[$0];</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">7</span>:</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">8</span>:</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">yy</span>.<span class="pl-smi">parser</span>.<span class="pl-smi">yy</span>.<span class="pl-en">addSignal</span>($$[$0]);</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">9</span>:</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">yy</span>.<span class="pl-smi">parser</span>.<span class="pl-smi">yy</span>.<span class="pl-en">setTitle</span>($$[$0]);</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">10</span>:</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Diagram.Note</span>($$[$0 <span class="pl-k">-</span> <span class="pl-c1">1</span>], $$[$0 <span class="pl-k">-</span> <span class="pl-c1">2</span>], $$[$0]);</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">11</span>:</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Diagram.Note</span>($$[$0 <span class="pl-k">-</span> <span class="pl-c1">1</span>], <span class="pl-smi">Diagram</span>.<span class="pl-c1">PLACEMENT</span>.<span class="pl-c1">OVER</span>, $$[$0]);</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">12</span>:</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">20</span>:</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> $$[$0];</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">13</span>:</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> [ $$[$0 <span class="pl-k">-</span> <span class="pl-c1">2</span>], $$[$0] ];</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">14</span>:</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-c1">PLACEMENT</span>.<span class="pl-c1">LEFTOF</span>;</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">15</span>:</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-c1">PLACEMENT</span>.<span class="pl-c1">RIGHTOF</span>;</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">16</span>:</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Diagram.Signal</span>($$[$0 <span class="pl-k">-</span> <span class="pl-c1">3</span>], $$[$0 <span class="pl-k">-</span> <span class="pl-c1">2</span>], $$[$0 <span class="pl-k">-</span> <span class="pl-c1">1</span>], $$[$0]);</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">17</span>:</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> <span class="pl-smi">yy</span>.<span class="pl-smi">parser</span>.<span class="pl-smi">yy</span>.<span class="pl-en">getActor</span>(<span class="pl-smi">Diagram</span>.<span class="pl-en">unescape</span>($$[$0]));</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">18</span>:</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> <span class="pl-smi">yy</span>.<span class="pl-smi">parser</span>.<span class="pl-smi">yy</span>.<span class="pl-en">getActorWithAlias</span>(<span class="pl-smi">Diagram</span>.<span class="pl-en">unescape</span>($$[$0]));</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">19</span>:</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> $$[$0 <span class="pl-k">-</span> <span class="pl-c1">1</span>] <span class="pl-k">|</span> $$[$0] <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">21</span>:</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-c1">LINETYPE</span>.<span class="pl-c1">SOLID</span>;</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">22</span>:</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-c1">LINETYPE</span>.<span class="pl-c1">DOTTED</span>;</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">23</span>:</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-c1">ARROWTYPE</span>.<span class="pl-c1">FILLED</span>;</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">24</span>:</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-c1">ARROWTYPE</span>.<span class="pl-c1">OPEN</span>;</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">case</span> <span class="pl-c1">25</span>:</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-en">unescape</span>($$[$0].<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>));</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">        table<span class="pl-k">:</span> [ <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">2</span> ], {</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-c1">2</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">        }), {</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">1</span><span class="pl-k">:</span> [ <span class="pl-c1">3</span> ]</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">5</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">3</span> ],</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-c1">4</span>,</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-c1">5</span>,</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">8</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">6</span> ],</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">9</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">7</span> ],</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">11</span><span class="pl-k">:</span> <span class="pl-c1">8</span>,</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">12</span><span class="pl-k">:</span> <span class="pl-c1">9</span>,</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">13</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">10</span> ],</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">15</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">12</span> ],</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">17</span><span class="pl-k">:</span> <span class="pl-c1">11</span>,</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> <span class="pl-c1">$V1</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">1</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">1</span> ]</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">3</span> ]), <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">4</span> ]), <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">5</span> ]), {</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-c1">14</span>,</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">15</span> ]</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">7</span> ]), <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">8</span> ]), {</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">14</span><span class="pl-k">:</span> <span class="pl-c1">16</span>,</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">31</span><span class="pl-k">:</span> <span class="pl-c1">$V2</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">23</span><span class="pl-k">:</span> <span class="pl-c1">18</span>,</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">25</span><span class="pl-k">:</span> <span class="pl-c1">19</span>,</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">27</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">20</span> ],</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">28</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">21</span> ]</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">16</span><span class="pl-k">:</span> <span class="pl-c1">22</span>,</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">18</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">23</span> ],</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">21</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">24</span> ],</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">22</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">25</span> ]</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-en">o</span>([ <span class="pl-c1">20</span>, <span class="pl-c1">27</span>, <span class="pl-c1">28</span>, <span class="pl-c1">31</span> ], [ <span class="pl-c1">2</span>, <span class="pl-c1">17</span> ]), <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">6</span> ]), <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">18</span> ]), <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">9</span> ]), <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">25</span> ]), {</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">17</span><span class="pl-k">:</span> <span class="pl-c1">26</span>,</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> <span class="pl-c1">$V1</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">20</span> ],</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">26</span><span class="pl-k">:</span> <span class="pl-c1">27</span>,</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">29</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">28</span> ],</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">30</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">29</span> ]</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-en">o</span>(<span class="pl-c1">$V3</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">21</span> ]), <span class="pl-en">o</span>(<span class="pl-c1">$V3</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">22</span> ]), {</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">17</span><span class="pl-k">:</span> <span class="pl-c1">30</span>,</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> <span class="pl-c1">$V1</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">17</span><span class="pl-k">:</span> <span class="pl-c1">32</span>,</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">19</span><span class="pl-k">:</span> <span class="pl-c1">31</span>,</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> <span class="pl-c1">$V1</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">14</span> ]</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">15</span> ]</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">14</span><span class="pl-k">:</span> <span class="pl-c1">33</span>,</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">31</span><span class="pl-k">:</span> <span class="pl-c1">$V2</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">19</span> ]</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">23</span> ]</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">24</span> ]</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">14</span><span class="pl-k">:</span> <span class="pl-c1">34</span>,</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">31</span><span class="pl-k">:</span> <span class="pl-c1">$V2</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">14</span><span class="pl-k">:</span> <span class="pl-c1">35</span>,</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">31</span><span class="pl-k">:</span> <span class="pl-c1">$V2</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">20</span><span class="pl-k">:</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">36</span> ],</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">31</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">12</span> ]</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">16</span> ]), <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">10</span> ]), <span class="pl-en">o</span>(<span class="pl-c1">$V0</span>, [ <span class="pl-c1">2</span>, <span class="pl-c1">11</span> ]), {</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">17</span><span class="pl-k">:</span> <span class="pl-c1">37</span>,</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> <span class="pl-c1">$V1</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">        }, {</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">31</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">13</span> ]</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">        } ],</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">        defaultActions<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">3</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">1</span> ],</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">24</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">14</span> ],</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">25</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">15</span> ],</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">27</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">19</span> ],</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">28</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">23</span> ],</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">29</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">24</span> ],</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">37</span><span class="pl-k">:</span> [ <span class="pl-c1">2</span>, <span class="pl-c1">13</span> ]</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">parseError</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">str</span>, <span class="pl-smi">hash</span>) {</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">hash</span>.<span class="pl-smi">recoverable</span>) <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(str);</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">trace</span>(str);</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">parse</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">input</span>) {</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">function</span> <span class="pl-en">lex</span>() {</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> token;</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> token <span class="pl-k">=</span> <span class="pl-smi">lexer</span>.<span class="pl-en">lex</span>() <span class="pl-k">||</span> <span class="pl-c1">EOF</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-k">typeof</span> token <span class="pl-k">&amp;&amp;</span> (token <span class="pl-k">=</span> <span class="pl-smi">self</span>.<span class="pl-smi">symbols_</span>[token] <span class="pl-k">||</span> token), </td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">                token;</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-c1">this</span>, stack <span class="pl-k">=</span> [ <span class="pl-c1">0</span> ], vstack <span class="pl-k">=</span> [ <span class="pl-c1">null</span> ], lstack <span class="pl-k">=</span> [], table <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">table</span>, yytext <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, yylineno <span class="pl-k">=</span> <span class="pl-c1">0</span>, yyleng <span class="pl-k">=</span> <span class="pl-c1">0</span>, recovering <span class="pl-k">=</span> <span class="pl-c1">0</span>, <span class="pl-c1">TERROR</span> <span class="pl-k">=</span> <span class="pl-c1">2</span>, <span class="pl-c1">EOF</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>, args <span class="pl-k">=</span> <span class="pl-smi">lstack</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(<span class="pl-c1">arguments</span>, <span class="pl-c1">1</span>), lexer <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-en">create</span>(<span class="pl-c1">this</span>.<span class="pl-smi">lexer</span>), sharedState <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">                yy<span class="pl-k">:</span> {}</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (<span class="pl-k">var</span> k <span class="pl-k">in</span> <span class="pl-c1">this</span>.<span class="pl-smi">yy</span>) <span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>.<span class="pl-smi">yy</span>, k) <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">sharedState</span>.<span class="pl-smi">yy</span>[k] <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">yy</span>[k]);</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">lexer</span>.<span class="pl-en">setInput</span>(input, <span class="pl-smi">sharedState</span>.<span class="pl-smi">yy</span>), <span class="pl-smi">sharedState</span>.<span class="pl-smi">yy</span>.<span class="pl-smi">lexer</span> <span class="pl-k">=</span> lexer, <span class="pl-smi">sharedState</span>.<span class="pl-smi">yy</span>.<span class="pl-smi">parser</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>, </td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> <span class="pl-smi">lexer</span>.<span class="pl-smi">yylloc</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">lexer</span>.<span class="pl-smi">yylloc</span> <span class="pl-k">=</span> {});</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> yyloc <span class="pl-k">=</span> <span class="pl-smi">lexer</span>.<span class="pl-smi">yylloc</span>;</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">lstack</span>.<span class="pl-c1">push</span>(yyloc);</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> ranges <span class="pl-k">=</span> <span class="pl-smi">lexer</span>.<span class="pl-c1">options</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">lexer</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ranges</span>;</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> <span class="pl-smi">sharedState</span>.<span class="pl-smi">yy</span>.<span class="pl-smi">parseError</span> <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-smi">parseError</span> <span class="pl-k">=</span> <span class="pl-smi">sharedState</span>.<span class="pl-smi">yy</span>.<span class="pl-smi">parseError</span> <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">parseError</span> <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-en">getPrototypeOf</span>(<span class="pl-c1">this</span>).<span class="pl-smi">parseError</span>;</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (<span class="pl-k">var</span> symbol, preErrorSymbol, state, action, r, p, len, newState, expected, yyval <span class="pl-k">=</span> {}; ;) {</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (state <span class="pl-k">=</span> stack[<span class="pl-smi">stack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>], <span class="pl-c1">this</span>.<span class="pl-smi">defaultActions</span>[state] <span class="pl-k">?</span> action <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">defaultActions</span>[state] <span class="pl-k">:</span> (<span class="pl-c1">null</span> <span class="pl-k">!==</span> symbol <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-k">typeof</span> symbol <span class="pl-k">||</span> (symbol <span class="pl-k">=</span> <span class="pl-en">lex</span>()), </td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">                action <span class="pl-k">=</span> table[state] <span class="pl-k">&amp;&amp;</span> table[state][symbol]), <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> action <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">action</span>.<span class="pl-c1">length</span> <span class="pl-k">||</span> <span class="pl-k">!</span>action[<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> errStr <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">                    expected <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">for</span> (p <span class="pl-k">in</span> table[state]) <span class="pl-c1">this</span>.<span class="pl-smi">terminals_</span>[p] <span class="pl-k">&amp;&amp;</span> p <span class="pl-k">&gt;</span> <span class="pl-c1">TERROR</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">expected</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">terminals_</span>[p] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">                    errStr <span class="pl-k">=</span> <span class="pl-smi">lexer</span>.<span class="pl-smi">showPosition</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Parse error on line <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (yylineno <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">lexer</span>.<span class="pl-en">showPosition</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span>Expecting <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">expected</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>, <span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>, got &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-c1">this</span>.<span class="pl-smi">terminals_</span>[symbol] <span class="pl-k">||</span> symbol) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Parse error on line <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (yylineno <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: Unexpected <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (symbol <span class="pl-k">==</span> <span class="pl-c1">EOF</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>end of input<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-c1">this</span>.<span class="pl-smi">terminals_</span>[symbol] <span class="pl-k">||</span> symbol) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>), </td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-en">parseError</span>(errStr, {</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">                        text<span class="pl-k">:</span> <span class="pl-smi">lexer</span>.<span class="pl-smi">match</span>,</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">                        token<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">terminals_</span>[symbol] <span class="pl-k">||</span> symbol,</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">                        line<span class="pl-k">:</span> <span class="pl-smi">lexer</span>.<span class="pl-smi">yylineno</span>,</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">                        loc<span class="pl-k">:</span> yyloc,</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">                        expected<span class="pl-k">:</span> expected</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">                    });</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (action[<span class="pl-c1">0</span>] <span class="pl-k">instanceof</span> <span class="pl-c1">Array</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">action</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>) <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Parse Error: multiple actions possible at state: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> state <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>, token: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> symbol);</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">switch</span> (action[<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">1</span>:</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">stack</span>.<span class="pl-c1">push</span>(symbol), <span class="pl-smi">vstack</span>.<span class="pl-c1">push</span>(<span class="pl-smi">lexer</span>.<span class="pl-smi">yytext</span>), <span class="pl-smi">lstack</span>.<span class="pl-c1">push</span>(<span class="pl-smi">lexer</span>.<span class="pl-smi">yylloc</span>), <span class="pl-smi">stack</span>.<span class="pl-c1">push</span>(action[<span class="pl-c1">1</span>]), </td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">                    symbol <span class="pl-k">=</span> <span class="pl-c1">null</span>, preErrorSymbol <span class="pl-k">?</span> (symbol <span class="pl-k">=</span> preErrorSymbol, preErrorSymbol <span class="pl-k">=</span> <span class="pl-c1">null</span>) <span class="pl-k">:</span> (yyleng <span class="pl-k">=</span> <span class="pl-smi">lexer</span>.<span class="pl-smi">yyleng</span>, </td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">                    yytext <span class="pl-k">=</span> <span class="pl-smi">lexer</span>.<span class="pl-smi">yytext</span>, yylineno <span class="pl-k">=</span> <span class="pl-smi">lexer</span>.<span class="pl-smi">yylineno</span>, yyloc <span class="pl-k">=</span> <span class="pl-smi">lexer</span>.<span class="pl-smi">yylloc</span>, recovering <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> recovering<span class="pl-k">--</span>);</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">2</span>:</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (len <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">productions_</span>[action[<span class="pl-c1">1</span>]][<span class="pl-c1">1</span>], <span class="pl-smi">yyval</span>.<span class="pl-smi">$</span> <span class="pl-k">=</span> vstack[<span class="pl-smi">vstack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> len], </td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">yyval</span>.<span class="pl-smi">_$</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">                        first_line<span class="pl-k">:</span> lstack[<span class="pl-smi">lstack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> (len <span class="pl-k">||</span> <span class="pl-c1">1</span>)].<span class="pl-smi">first_line</span>,</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">                        last_line<span class="pl-k">:</span> lstack[<span class="pl-smi">lstack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].<span class="pl-smi">last_line</span>,</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">                        first_column<span class="pl-k">:</span> lstack[<span class="pl-smi">lstack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> (len <span class="pl-k">||</span> <span class="pl-c1">1</span>)].<span class="pl-smi">first_column</span>,</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">                        last_column<span class="pl-k">:</span> lstack[<span class="pl-smi">lstack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].<span class="pl-smi">last_column</span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">                    }, ranges <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">yyval</span>.<span class="pl-smi">_$</span>.<span class="pl-smi">range</span> <span class="pl-k">=</span> [ lstack[<span class="pl-smi">lstack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> (len <span class="pl-k">||</span> <span class="pl-c1">1</span>)].<span class="pl-smi">range</span>[<span class="pl-c1">0</span>], lstack[<span class="pl-smi">lstack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].<span class="pl-smi">range</span>[<span class="pl-c1">1</span>] ]), </td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">                    r <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">performAction</span>.<span class="pl-c1">apply</span>(yyval, [ yytext, yyleng, yylineno, <span class="pl-smi">sharedState</span>.<span class="pl-smi">yy</span>, action[<span class="pl-c1">1</span>], vstack, lstack ].<span class="pl-c1">concat</span>(args)), </td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-k">typeof</span> r) <span class="pl-k">return</span> r;</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">                    len <span class="pl-k">&amp;&amp;</span> (stack <span class="pl-k">=</span> <span class="pl-smi">stack</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">*</span> len <span class="pl-k">*</span> <span class="pl-c1">2</span>), vstack <span class="pl-k">=</span> <span class="pl-smi">vstack</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">*</span> len), </td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">                    lstack <span class="pl-k">=</span> <span class="pl-smi">lstack</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">*</span> len)), <span class="pl-smi">stack</span>.<span class="pl-c1">push</span>(<span class="pl-c1">this</span>.<span class="pl-smi">productions_</span>[action[<span class="pl-c1">1</span>]][<span class="pl-c1">0</span>]), </td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">vstack</span>.<span class="pl-c1">push</span>(<span class="pl-smi">yyval</span>.<span class="pl-smi">$</span>), <span class="pl-smi">lstack</span>.<span class="pl-c1">push</span>(<span class="pl-smi">yyval</span>.<span class="pl-smi">_$</span>), newState <span class="pl-k">=</span> table[stack[<span class="pl-smi">stack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">2</span>]][stack[<span class="pl-smi">stack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>]], </td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">stack</span>.<span class="pl-c1">push</span>(newState);</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">3</span>:</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-en">lexer</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> lexer <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">EOF</span><span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">parseError</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">str</span>, <span class="pl-smi">hash</span>) {</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">yy</span>.<span class="pl-smi">parser</span>) <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(str);</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">yy</span>.<span class="pl-smi">parser</span>.<span class="pl-en">parseError</span>(str, hash);</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> resets the lexer, sets new input</span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">setInput</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">input</span>, <span class="pl-smi">yy</span>) {</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">yy</span> <span class="pl-k">=</span> yy <span class="pl-k">||</span> <span class="pl-c1">this</span>.<span class="pl-smi">yy</span> <span class="pl-k">||</span> {}, <span class="pl-c1">this</span>.<span class="pl-smi">_input</span> <span class="pl-k">=</span> input, <span class="pl-c1">this</span>.<span class="pl-smi">_more</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_backtrack</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">done</span> <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>, </td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">yylineno</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">yyleng</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>, <span class="pl-c1">this</span>.<span class="pl-smi">yytext</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">matched</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">match</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span> <span class="pl-k">=</span> [ <span class="pl-s"><span class="pl-pds">&quot;</span>INITIAL<span class="pl-pds">&quot;</span></span> ], </td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">                    first_line<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">                    first_column<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">                    last_line<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">                    last_column<span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">                }, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ranges</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">range</span> <span class="pl-k">=</span> [ <span class="pl-c1">0</span>, <span class="pl-c1">0</span> ]), <span class="pl-c1">this</span>.<span class="pl-smi">offset</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>, <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> consumes and returns one char from the input</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">input</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> ch <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_input</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">yytext</span> <span class="pl-k">+=</span> ch, <span class="pl-c1">this</span>.<span class="pl-smi">yyleng</span><span class="pl-k">++</span>, <span class="pl-c1">this</span>.<span class="pl-smi">offset</span><span class="pl-k">++</span>, <span class="pl-c1">this</span>.<span class="pl-smi">match</span> <span class="pl-k">+=</span> ch, <span class="pl-c1">this</span>.<span class="pl-smi">matched</span> <span class="pl-k">+=</span> ch;</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> lines <span class="pl-k">=</span> <span class="pl-smi">ch</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-c1">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-c1">\n</span>)<span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-pds">/</span>g</span>);</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> lines <span class="pl-k">?</span> (<span class="pl-c1">this</span>.<span class="pl-smi">yylineno</span><span class="pl-k">++</span>, <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">last_line</span><span class="pl-k">++</span>) <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">last_column</span><span class="pl-k">++</span>, </td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ranges</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">range</span>[<span class="pl-c1">1</span>]<span class="pl-k">++</span>, <span class="pl-c1">this</span>.<span class="pl-smi">_input</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_input</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">1</span>), </td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">                ch;</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> unshifts one char (or a string) into the input</span></td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">unput</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">ch</span>) {</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> len <span class="pl-k">=</span> <span class="pl-smi">ch</span>.<span class="pl-c1">length</span>, lines <span class="pl-k">=</span> <span class="pl-smi">ch</span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-c1">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-c1">\n</span>)<span class="pl-pds">/</span>g</span>);</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">_input</span> <span class="pl-k">=</span> ch <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">_input</span>, <span class="pl-c1">this</span>.<span class="pl-smi">yytext</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">yytext</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, <span class="pl-c1">this</span>.<span class="pl-smi">yytext</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> len), </td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span>this.yyleng -= len;</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">offset</span> <span class="pl-k">-=</span> len;</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> oldLines <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">match</span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-c1">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-c1">\n</span>)<span class="pl-pds">/</span>g</span>);</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">match</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">match</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, <span class="pl-c1">this</span>.<span class="pl-smi">match</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>), <span class="pl-c1">this</span>.<span class="pl-smi">matched</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">matched</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, <span class="pl-c1">this</span>.<span class="pl-smi">matched</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>), </td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">lines</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">this</span>.<span class="pl-smi">yylineno</span> <span class="pl-k">-=</span> <span class="pl-smi">lines</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> r <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">range</span>;</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">                    first_line<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">first_line</span>,</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">                    last_line<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylineno</span> <span class="pl-k">+</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">                    first_column<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">first_column</span>,</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">                    last_column<span class="pl-k">:</span> lines <span class="pl-k">?</span> (<span class="pl-smi">lines</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-smi">oldLines</span>.<span class="pl-c1">length</span> <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">first_column</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>) <span class="pl-k">+</span> oldLines[<span class="pl-smi">oldLines</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-smi">lines</span>.<span class="pl-c1">length</span>].<span class="pl-c1">length</span> <span class="pl-k">-</span> lines[<span class="pl-c1">0</span>].<span class="pl-c1">length</span> <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">first_column</span> <span class="pl-k">-</span> len</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">                }, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ranges</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">range</span> <span class="pl-k">=</span> [ r[<span class="pl-c1">0</span>], r[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">yyleng</span> <span class="pl-k">-</span> len ]), </td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">yyleng</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">yytext</span>.<span class="pl-c1">length</span>, <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> When called from action, caches matched text and appends it on next action</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">more</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">_more</span> <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">0</span>, <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">reject</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">backtrack_lexer</span> <span class="pl-k">?</span> (<span class="pl-c1">this</span>.<span class="pl-smi">_backtrack</span> <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">0</span>, <span class="pl-c1">this</span>) <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-en">parseError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Lexical error on line <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-c1">this</span>.<span class="pl-smi">yylineno</span> <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-en">showPosition</span>(), {</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">                    text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">                    token<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">                    line<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylineno</span></td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> retain first n characters of the match</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">less</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">n</span>) {</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-en">unput</span>(<span class="pl-c1">this</span>.<span class="pl-smi">match</span>.<span class="pl-c1">slice</span>(n));</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> displays already matched input, i.e. for error messages</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">pastInput</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> past <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">matched</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, <span class="pl-c1">this</span>.<span class="pl-smi">matched</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">this</span>.<span class="pl-smi">match</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> (<span class="pl-smi">past</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">20</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>...<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-smi">past</span>.<span class="pl-c1">substr</span>(<span class="pl-k">-</span><span class="pl-c1">20</span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\n</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> displays upcoming input, i.e. for error messages</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">upcomingInput</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> next <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">match</span>;</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-smi">next</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> <span class="pl-c1">20</span> <span class="pl-k">&amp;&amp;</span> (next <span class="pl-k">+=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_input</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, <span class="pl-c1">20</span> <span class="pl-k">-</span> <span class="pl-smi">next</span>.<span class="pl-c1">length</span>)), (<span class="pl-smi">next</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, <span class="pl-c1">20</span>) <span class="pl-k">+</span> (<span class="pl-smi">next</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">20</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>...<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\n</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> displays the character position where the lexing error occurred, i.e. for error messages</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">showPosition</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> pre <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">pastInput</span>(), c <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-smi">pre</span>.<span class="pl-c1">length</span> <span class="pl-k">+</span> <span class="pl-c1">1</span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> pre <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-en">upcomingInput</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> c <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> test the lexed token: return FALSE when not a match, otherwise return token</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">test_match</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">match</span>, <span class="pl-smi">indexed_rule</span>) {</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> token, lines, backup;</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">backtrack_lexer</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-c"><span class="pl-c">//</span> save context</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">                backup <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">                    yylineno<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylineno</span>,</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">                    yylloc<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">                        first_line<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">first_line</span>,</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">                        last_line<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">last_line</span>,</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">                        first_column<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">first_column</span>,</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">                        last_column<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">last_column</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">                    },</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">                    yytext<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yytext</span>,</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">                    match<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">match</span>,</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">                    matches<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">matches</span>,</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">                    matched<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">matched</span>,</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">                    yyleng<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yyleng</span>,</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">                    offset<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">offset</span>,</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">                    _more<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">_more</span>,</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">                    _input<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">_input</span>,</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">                    yy<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yy</span>,</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">                    conditionStack<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>),</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">                    done<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">done</span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">                }, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ranges</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">backup</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">range</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">range</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>))), lines <span class="pl-k">=</span> match[<span class="pl-c1">0</span>].<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-c1">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-c1">\n</span>)<span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-pds">/</span>g</span>), </td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">                lines <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">this</span>.<span class="pl-smi">yylineno</span> <span class="pl-k">+=</span> <span class="pl-smi">lines</span>.<span class="pl-c1">length</span>), <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">                    first_line<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">last_line</span>,</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">                    last_line<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylineno</span> <span class="pl-k">+</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">                    first_column<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">last_column</span>,</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">                    last_column<span class="pl-k">:</span> lines <span class="pl-k">?</span> lines[<span class="pl-smi">lines</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].<span class="pl-c1">length</span> <span class="pl-k">-</span> lines[<span class="pl-smi">lines</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\r</span><span class="pl-k">?</span><span class="pl-c1">\n</span><span class="pl-k">?</span><span class="pl-pds">/</span></span>)[<span class="pl-c1">0</span>].<span class="pl-c1">length</span> <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">last_column</span> <span class="pl-k">+</span> match[<span class="pl-c1">0</span>].<span class="pl-c1">length</span></td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">                }, <span class="pl-c1">this</span>.<span class="pl-smi">yytext</span> <span class="pl-k">+=</span> match[<span class="pl-c1">0</span>], <span class="pl-c1">this</span>.<span class="pl-smi">match</span> <span class="pl-k">+=</span> match[<span class="pl-c1">0</span>], <span class="pl-c1">this</span>.<span class="pl-smi">matches</span> <span class="pl-k">=</span> match, <span class="pl-c1">this</span>.<span class="pl-smi">yyleng</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">yytext</span>.<span class="pl-c1">length</span>, </td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ranges</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">this</span>.<span class="pl-smi">yylloc</span>.<span class="pl-smi">range</span> <span class="pl-k">=</span> [ <span class="pl-c1">this</span>.<span class="pl-smi">offset</span>, <span class="pl-c1">this</span>.<span class="pl-smi">offset</span> <span class="pl-k">+=</span> <span class="pl-c1">this</span>.<span class="pl-smi">yyleng</span> ]), </td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">_more</span> <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>, <span class="pl-c1">this</span>.<span class="pl-smi">_backtrack</span> <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>, <span class="pl-c1">this</span>.<span class="pl-smi">_input</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_input</span>.<span class="pl-c1">slice</span>(match[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>), </td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">matched</span> <span class="pl-k">+=</span> match[<span class="pl-c1">0</span>], token <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">performAction</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, <span class="pl-c1">this</span>.<span class="pl-smi">yy</span>, <span class="pl-c1">this</span>, indexed_rule, <span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>[<span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>]), </td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">done</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-smi">_input</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">this</span>.<span class="pl-smi">done</span> <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>), token) <span class="pl-k">return</span> token;</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">_backtrack</span>) {</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c"><span class="pl-c">//</span> recover context</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">for</span> (<span class="pl-k">var</span> k <span class="pl-k">in</span> backup) <span class="pl-c1">this</span>[k] <span class="pl-k">=</span> backup[k];</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> return next match in input</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">next</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">done</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">EOF</span>;</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">_input</span> <span class="pl-k">||</span> (<span class="pl-c1">this</span>.<span class="pl-smi">done</span> <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> token, match, tempMatch, index;</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">_more</span> <span class="pl-k">||</span> (<span class="pl-c1">this</span>.<span class="pl-smi">yytext</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">match</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">for</span> (<span class="pl-k">var</span> rules <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">_currentRules</span>(), i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">rules</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) <span class="pl-k">if</span> (tempMatch <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_input</span>.<span class="pl-c1">match</span>(<span class="pl-c1">this</span>.<span class="pl-c1">rules</span>[rules[i]]), </td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">                tempMatch <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">!</span>match <span class="pl-k">||</span> tempMatch[<span class="pl-c1">0</span>].<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> match[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>)) {</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (match <span class="pl-k">=</span> tempMatch, index <span class="pl-k">=</span> i, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">backtrack_lexer</span>) {</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (token <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">test_match</span>(tempMatch, rules[i]), token <span class="pl-k">!==</span> <span class="pl-k">!</span><span class="pl-c1">1</span>) <span class="pl-k">return</span> token;</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">_backtrack</span>) {</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">                            match <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c"><span class="pl-c">//</span> else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)</span></td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">flex</span>) <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> match <span class="pl-k">?</span> (token <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">test_match</span>(match, rules[index]), token <span class="pl-k">!==</span> <span class="pl-k">!</span><span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> token) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">===</span> <span class="pl-c1">this</span>.<span class="pl-smi">_input</span> <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-c1">EOF</span> <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-en">parseError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Lexical error on line <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-c1">this</span>.<span class="pl-smi">yylineno</span> <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>. Unrecognized text.<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-en">showPosition</span>(), {</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">                    text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">                    token<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">                    line<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">yylineno</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> return next match that has a token</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">lex</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> r <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">next</span>();</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> r <span class="pl-k">?</span> r <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-en">lex</span>();</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">begin</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">condition</span>) {</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>.<span class="pl-c1">push</span>(condition);</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> pop the previously active lexer condition state off the condition stack</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">popState</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> n <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> n <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>.<span class="pl-c1">pop</span>() <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> produce the lexer rule set which is active for the currently active lexer condition state</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">_currentRules</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>[<span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>] <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-smi">conditions</span>[<span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>[<span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>]].<span class="pl-c1">rules</span> <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">conditions</span>.<span class="pl-c1">INITIAL</span>.<span class="pl-c1">rules</span>;</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available</span></td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">topState</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">n</span>) {</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> n <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span> <span class="pl-k">-</span> <span class="pl-c1">Math</span>.<span class="pl-c1">abs</span>(n <span class="pl-k">||</span> <span class="pl-c1">0</span>), n <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>[n] <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>INITIAL<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> alias for begin(condition)</span></td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">pushState</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">condition</span>) {</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-en">begin</span>(condition);</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> return the number of states currently on the stack</span></td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">stateStackSize</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">conditionStack</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">            options<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&quot;</span>case-insensitive<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-k">!</span><span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">performAction</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">yy</span>, <span class="pl-smi">yy_</span>, <span class="pl-smi">$avoiding_name_collisions</span>, <span class="pl-c1">YY_START</span>) {</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">switch</span> ($avoiding_name_collisions) {</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">0</span>:</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">8</span>;</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">1</span>:</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c">/* skip whitespace */</span></td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">2</span>:</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c">/* skip comments */</span></td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">3</span>:</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">9</span>;</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">4</span>:</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">21</span>;</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">5</span>:</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">22</span>;</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">6</span>:</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">18</span>;</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">7</span>:</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">15</span>;</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">8</span>:</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">13</span>;</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">9</span>:</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">20</span>;</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">10</span>:</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">24</span>;</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">11</span>:</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">24</span>;</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">12</span>:</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">28</span>;</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">13</span>:</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">27</span>;</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">14</span>:</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">30</span>;</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">15</span>:</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">29</span>;</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">16</span>:</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">31</span>;</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">17</span>:</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">5</span>;</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">case</span> <span class="pl-c1">18</span>:</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>INVALID<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">            rules<span class="pl-k">:</span> [<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[<span class="pl-c1">\r\n</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">\s</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:#<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\r\n</span>]</span><span class="pl-k">*</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:participant<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:left of<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:right of<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:over<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:note<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:title<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:,)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\-&gt;</span>:,<span class="pl-c1">\r\n</span>&quot;]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:&quot;<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span><span class="pl-k">+</span>&quot;)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:--)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:-)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:&gt;&gt;)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:&gt;)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\r\n</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-k">$</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">.</span>)<span class="pl-pds">/</span>i</span> ],</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">            conditions<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">INITIAL</span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">                    rules<span class="pl-k">:</span> [ <span class="pl-c1">0</span>, <span class="pl-c1">1</span>, <span class="pl-c1">2</span>, <span class="pl-c1">3</span>, <span class="pl-c1">4</span>, <span class="pl-c1">5</span>, <span class="pl-c1">6</span>, <span class="pl-c1">7</span>, <span class="pl-c1">8</span>, <span class="pl-c1">9</span>, <span class="pl-c1">10</span>, <span class="pl-c1">11</span>, <span class="pl-c1">12</span>, <span class="pl-c1">13</span>, <span class="pl-c1">14</span>, <span class="pl-c1">15</span>, <span class="pl-c1">16</span>, <span class="pl-c1">17</span>, <span class="pl-c1">18</span> ],</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">                    inclusive<span class="pl-k">:</span> <span class="pl-k">!</span><span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> lexer;</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">    }();</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">parser</span>.<span class="pl-smi">lexer</span> <span class="pl-k">=</span> lexer, <span class="pl-smi">Parser</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> parser, <span class="pl-smi">parser</span>.<span class="pl-smi">Parser</span> <span class="pl-k">=</span> Parser, </td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">new</span> <span class="pl-en">Parser</span>();</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">}();</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-k">typeof</span> require <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-k">typeof</span> <span class="pl-c1">exports</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">exports</span>.<span class="pl-smi">parser</span> <span class="pl-k">=</span> parser, </td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">exports</span>.<span class="pl-smi">Parser</span> <span class="pl-k">=</span> <span class="pl-smi">parser</span>.<span class="pl-smi">Parser</span>, <span class="pl-c1">exports</span>.<span class="pl-en">parse</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">parser</span>.<span class="pl-smi">parse</span>.<span class="pl-c1">apply</span>(parser, <span class="pl-c1">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">}, <span class="pl-c1">exports</span>.<span class="pl-en">main</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">args</span>) {</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">    args[<span class="pl-c1">1</span>] <span class="pl-k">||</span> (<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Usage: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> args[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> FILE<span class="pl-pds">&quot;</span></span>), <span class="pl-c1">process</span>.<span class="pl-en">exit</span>(<span class="pl-c1">1</span>));</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> source <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>fs<span class="pl-pds">&quot;</span></span>).<span class="pl-en">readFileSync</span>(<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>path<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">normalize</span>(args[<span class="pl-c1">1</span>]), <span class="pl-s"><span class="pl-pds">&quot;</span>utf8<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">exports</span>.<span class="pl-smi">parser</span>.<span class="pl-c1">parse</span>(source);</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">}, <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-k">typeof</span> <span class="pl-c1">module</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">require</span>.<span class="pl-smi">main</span> <span class="pl-k">===</span> <span class="pl-c1">module</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">exports</span>.<span class="pl-en">main</span>(<span class="pl-c1">process</span>.<span class="pl-smi">argv</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">1</span>)));</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * jison doesn&#39;t have a good exception, so we make one.</span></td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * This is brittle as it depends on jison internals</span></td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">ParseError</span>(<span class="pl-smi">message</span>, <span class="pl-smi">hash</span>) {</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">extend</span>(<span class="pl-c1">this</span>, hash);</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ParseError<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">message</span> <span class="pl-k">=</span> (message <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ParseError</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>();</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-smi">ParseError</span> <span class="pl-k">=</span> ParseError;</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-en">parse</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">input</span>) {</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> TODO jison v0.4.17 changed their API slightly, so parser is no longer defined:</span></td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Create the object to track state and deal with errors</span></td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">parser</span>.<span class="pl-smi">yy</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Diagram</span>();</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">parser</span>.<span class="pl-smi">yy</span>.<span class="pl-en">parseError</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">message</span>, <span class="pl-smi">hash</span>) {</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">ParseError</span>(message, hash);</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Parse</span></td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> diagram <span class="pl-k">=</span> <span class="pl-smi">parser</span>.<span class="pl-c1">parse</span>(input);</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Then clean up the parseError key that a user won&#39;t care about</span></td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">delete</span> <span class="pl-smi">diagram</span>.<span class="pl-smi">parseError</span>;</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> diagram;</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/** js sequence diagrams</span></td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  https://bramp.github.io/js-sequence-diagrams/</span></td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  (c) 2012-2017 Andrew Brampton (bramp.net)</span></td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Simplified BSD license.</span></td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*global Diagram, _ */</span></td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Following the CSS convention</span></td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Margin is the gap outside the box</span></td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Padding is the gap inside the box</span></td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Each object has x/y/width/height properties</span></td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> The x/y should be top left corner</span></td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> width/height is with both margin and padding</span></td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> TODO</span></td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Image width is wrong, when there is a note in the right hand col</span></td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Title box could look better</span></td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Note box could look better</span></td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">DIAGRAM_MARGIN</span> <span class="pl-k">=</span> <span class="pl-c1">10</span>;</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">ACTOR_MARGIN</span>   <span class="pl-k">=</span> <span class="pl-c1">10</span>; <span class="pl-c"><span class="pl-c">//</span> Margin around a actor</span></td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">ACTOR_PADDING</span>  <span class="pl-k">=</span> <span class="pl-c1">10</span>; <span class="pl-c"><span class="pl-c">//</span> Padding inside a actor</span></td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">SIGNAL_MARGIN</span>  <span class="pl-k">=</span> <span class="pl-c1">5</span>; <span class="pl-c"><span class="pl-c">//</span> Margin around a signal</span></td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">SIGNAL_PADDING</span> <span class="pl-k">=</span> <span class="pl-c1">5</span>; <span class="pl-c"><span class="pl-c">//</span> Padding inside a signal</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">NOTE_MARGIN</span>   <span class="pl-k">=</span> <span class="pl-c1">10</span>; <span class="pl-c"><span class="pl-c">//</span> Margin around a note</span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">NOTE_PADDING</span>  <span class="pl-k">=</span> <span class="pl-c1">5</span>; <span class="pl-c"><span class="pl-c">//</span> Padding inside a note</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">NOTE_OVERLAP</span>  <span class="pl-k">=</span> <span class="pl-c1">15</span>; <span class="pl-c"><span class="pl-c">//</span> Overlap when using a &quot;note over A,B&quot;</span></td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">TITLE_MARGIN</span>   <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">TITLE_PADDING</span>  <span class="pl-k">=</span> <span class="pl-c1">5</span>;</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">SELF_SIGNAL_WIDTH</span> <span class="pl-k">=</span> <span class="pl-c1">20</span>; <span class="pl-c"><span class="pl-c">//</span> How far out a self signal goes</span></td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">PLACEMENT</span> <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-c1">PLACEMENT</span>;</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">LINETYPE</span>  <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-c1">LINETYPE</span>;</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">ARROWTYPE</span> <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-c1">ARROWTYPE</span>;</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">ALIGN_LEFT</span>   <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">ALIGN_CENTER</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">AssertException</span>(<span class="pl-smi">message</span>) { <span class="pl-c1">this</span>.<span class="pl-smi">message</span> <span class="pl-k">=</span> message; }</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">AssertException</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>AssertException: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">message</span>;</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">assert</span>(<span class="pl-smi">exp</span>, <span class="pl-smi">message</span>) {</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span>exp) {</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">AssertException</span>(message);</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">String</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">trim</span>) {</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">String</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">trim</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-smi">themes</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">registerTheme</span>(<span class="pl-smi">name</span>, <span class="pl-smi">theme</span>) {</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Diagram</span>.<span class="pl-smi">themes</span>[name] <span class="pl-k">=</span> theme;</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/******************</span></td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Drawing extras</span></td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> ******************/</span></td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">getCenterX</span>(<span class="pl-smi">box</span>) {</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-smi">box</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-smi">box</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">getCenterY</span>(<span class="pl-smi">box</span>) {</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-smi">box</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-smi">box</span>.<span class="pl-c1">height</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/******************</span></td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * SVG Path extras</span></td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> ******************/</span></td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">clamp</span>(<span class="pl-smi">x</span>, <span class="pl-smi">min</span>, <span class="pl-smi">max</span>) {</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (x <span class="pl-k">&lt;</span> min) {</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> min;</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (x <span class="pl-k">&gt;</span> max) {</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> max;</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> x;</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">wobble</span>(<span class="pl-smi">x1</span>, <span class="pl-smi">y1</span>, <span class="pl-smi">x2</span>, <span class="pl-smi">y2</span>) {</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">assert</span>(<span class="pl-smi">_</span>.<span class="pl-c1">all</span>([x1,x2,y1,y2], <span class="pl-smi">_</span>.<span class="pl-smi">isFinite</span>), <span class="pl-s"><span class="pl-pds">&#39;</span>x1,x2,y1,y2 must be numeric<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Wobble no more than 1/25 of the line length</span></td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> factor <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">sqrt</span>((x2 <span class="pl-k">-</span> x1) <span class="pl-k">*</span> (x2 <span class="pl-k">-</span> x1) <span class="pl-k">+</span> (y2 <span class="pl-k">-</span> y1) <span class="pl-k">*</span> (y2 <span class="pl-k">-</span> y1)) <span class="pl-k">/</span> <span class="pl-c1">25</span>;</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Distance along line where the control points are</span></td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Clamp between 20% and 80% so any arrow heads aren&#39;t angled too much</span></td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> r1 <span class="pl-k">=</span> <span class="pl-en">clamp</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>(), <span class="pl-c1">0.2</span>, <span class="pl-c1">0.8</span>);</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> r2 <span class="pl-k">=</span> <span class="pl-en">clamp</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>(), <span class="pl-c1">0.2</span>, <span class="pl-c1">0.8</span>);</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> xfactor <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">&gt;</span> <span class="pl-c1">0.5</span> <span class="pl-k">?</span> factor <span class="pl-k">:</span> <span class="pl-k">-</span>factor;</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> yfactor <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">&gt;</span> <span class="pl-c1">0.5</span> <span class="pl-k">?</span> factor <span class="pl-k">:</span> <span class="pl-k">-</span>factor;</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> p1 <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">    x<span class="pl-k">:</span> (x2 <span class="pl-k">-</span> x1) <span class="pl-k">*</span> r1 <span class="pl-k">+</span> x1 <span class="pl-k">+</span> xfactor,</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">    y<span class="pl-k">:</span> (y2 <span class="pl-k">-</span> y1) <span class="pl-k">*</span> r1 <span class="pl-k">+</span> y1 <span class="pl-k">+</span> yfactor</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> p2 <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">    x<span class="pl-k">:</span> (x2 <span class="pl-k">-</span> x1) <span class="pl-k">*</span> r2 <span class="pl-k">+</span> x1 <span class="pl-k">-</span> xfactor,</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">    y<span class="pl-k">:</span> (y2 <span class="pl-k">-</span> y1) <span class="pl-k">*</span> r2 <span class="pl-k">+</span> y1 <span class="pl-k">-</span> yfactor</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>C<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">p1</span>.<span class="pl-c1">x</span>.<span class="pl-en">toFixed</span>(<span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">p1</span>.<span class="pl-c1">y</span>.<span class="pl-en">toFixed</span>(<span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-c"><span class="pl-c">//</span> start control point</span></td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">         <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">p2</span>.<span class="pl-c1">x</span>.<span class="pl-en">toFixed</span>(<span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">p2</span>.<span class="pl-c1">y</span>.<span class="pl-en">toFixed</span>(<span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-c"><span class="pl-c">//</span> end control point</span></td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">         <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">x2</span>.<span class="pl-en">toFixed</span>(<span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">y2</span>.<span class="pl-en">toFixed</span>(<span class="pl-c1">1</span>);      <span class="pl-c"><span class="pl-c">//</span> end point</span></td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Draws a wobbly (hand drawn) rect</span></td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">handRect</span>(<span class="pl-smi">x</span>, <span class="pl-smi">y</span>, <span class="pl-smi">w</span>, <span class="pl-smi">h</span>) {</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">assert</span>(<span class="pl-smi">_</span>.<span class="pl-c1">all</span>([x, y, w, h], <span class="pl-smi">_</span>.<span class="pl-smi">isFinite</span>), <span class="pl-s"><span class="pl-pds">&#39;</span>x, y, w, h must be numeric<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>M<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> x <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> y <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">   <span class="pl-en">wobble</span>(x, y, x <span class="pl-k">+</span> w, y) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">   <span class="pl-en">wobble</span>(x <span class="pl-k">+</span> w, y, x <span class="pl-k">+</span> w, y <span class="pl-k">+</span> h) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">   <span class="pl-en">wobble</span>(x <span class="pl-k">+</span> w, y <span class="pl-k">+</span> h, x, y <span class="pl-k">+</span> h) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">   <span class="pl-en">wobble</span>(x, y <span class="pl-k">+</span> h, x, y);</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Draws a wobbly (hand drawn) line</span></td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">handLine</span>(<span class="pl-smi">x1</span>, <span class="pl-smi">y1</span>, <span class="pl-smi">x2</span>, <span class="pl-smi">y2</span>) {</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">assert</span>(<span class="pl-smi">_</span>.<span class="pl-c1">all</span>([x1,x2,y1,y2], <span class="pl-smi">_</span>.<span class="pl-smi">isFinite</span>), <span class="pl-s"><span class="pl-pds">&#39;</span>x1,x2,y1,y2 must be numeric<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>M<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">x1</span>.<span class="pl-en">toFixed</span>(<span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">y1</span>.<span class="pl-en">toFixed</span>(<span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-en">wobble</span>(x1, y1, x2, y2);</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/******************</span></td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * BaseTheme</span></td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> ******************/</span></td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">BaseTheme</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">diagram</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">init</span>(diagram, options);</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">_</span>.<span class="pl-en">extend</span>(<span class="pl-smi">BaseTheme</span>.<span class="pl-c1">prototype</span>, {</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Init called while creating the Theme</span></td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">init</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">diagram</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">diagram</span> <span class="pl-k">=</span> diagram;</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">actorsHeight_</span>  <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">signalsHeight_</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">title_</span> <span class="pl-k">=</span> <span class="pl-c1">undefined</span>; <span class="pl-c"><span class="pl-c">//</span> hack - This should be somewhere better</span></td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">setupPaper</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">container</span>) {},</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">draw</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">container</span>) {</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">setupPaper</span>(container);</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">layout</span>();</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> titleHeight <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">title_</span> <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-smi">title_</span>.<span class="pl-c1">height</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> y <span class="pl-k">=</span> <span class="pl-c1">DIAGRAM_MARGIN</span> <span class="pl-k">+</span> titleHeight;</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">drawTitle</span>();</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">drawActors</span>(y);</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">drawSignals</span>(y <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">actorsHeight_</span>);</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">layout</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Local copies</span></td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> diagram <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">diagram</span>;</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> font    <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">font_</span>;</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> actors  <span class="pl-k">=</span> <span class="pl-smi">diagram</span>.<span class="pl-smi">actors</span>;</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> signals <span class="pl-k">=</span> <span class="pl-smi">diagram</span>.<span class="pl-smi">signals</span>;</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">diagram</span>.<span class="pl-c1">width</span>  <span class="pl-k">=</span> <span class="pl-c1">0</span>; <span class="pl-c"><span class="pl-c">//</span> min width</span></td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">diagram</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>; <span class="pl-c"><span class="pl-c">//</span> min height</span></td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Setup some layout stuff</span></td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">diagram</span>.<span class="pl-c1">title</span>) {</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> title <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">title_</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> bb <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">textBBox</span>(<span class="pl-smi">diagram</span>.<span class="pl-c1">title</span>, font);</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">title</span>.<span class="pl-smi">textBB</span> <span class="pl-k">=</span> bb;</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">title</span>.<span class="pl-smi">message</span> <span class="pl-k">=</span> <span class="pl-smi">diagram</span>.<span class="pl-c1">title</span>;</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">title</span>.<span class="pl-c1">width</span>  <span class="pl-k">=</span> <span class="pl-smi">bb</span>.<span class="pl-c1">width</span>  <span class="pl-k">+</span> (<span class="pl-c1">TITLE_PADDING</span> <span class="pl-k">+</span> <span class="pl-c1">TITLE_MARGIN</span>) <span class="pl-k">*</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">title</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-smi">bb</span>.<span class="pl-c1">height</span> <span class="pl-k">+</span> (<span class="pl-c1">TITLE_PADDING</span> <span class="pl-k">+</span> <span class="pl-c1">TITLE_MARGIN</span>) <span class="pl-k">*</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">title</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> <span class="pl-c1">DIAGRAM_MARGIN</span>;</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">title</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> <span class="pl-c1">DIAGRAM_MARGIN</span>;</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">diagram</span>.<span class="pl-c1">width</span>  <span class="pl-k">+=</span> <span class="pl-smi">title</span>.<span class="pl-c1">width</span>;</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">diagram</span>.<span class="pl-c1">height</span> <span class="pl-k">+=</span> <span class="pl-smi">title</span>.<span class="pl-c1">height</span>;</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">_</span>.<span class="pl-en">each</span>(actors, <span class="pl-k">function</span>(<span class="pl-smi">a</span>) {</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> bb <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">textBBox</span>(<span class="pl-smi">a</span>.<span class="pl-c1">name</span>, font);</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">a</span>.<span class="pl-smi">textBB</span> <span class="pl-k">=</span> bb;</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">a</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>; <span class="pl-smi">a</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">a</span>.<span class="pl-c1">width</span>  <span class="pl-k">=</span> <span class="pl-smi">bb</span>.<span class="pl-c1">width</span>  <span class="pl-k">+</span> (<span class="pl-c1">ACTOR_PADDING</span> <span class="pl-k">+</span> <span class="pl-c1">ACTOR_MARGIN</span>) <span class="pl-k">*</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">a</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-smi">bb</span>.<span class="pl-c1">height</span> <span class="pl-k">+</span> (<span class="pl-c1">ACTOR_PADDING</span> <span class="pl-k">+</span> <span class="pl-c1">ACTOR_MARGIN</span>) <span class="pl-k">*</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">a</span>.<span class="pl-smi">distances</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">a</span>.<span class="pl-c1">paddingRight</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">actorsHeight_</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-smi">a</span>.<span class="pl-c1">height</span>, <span class="pl-c1">this</span>.<span class="pl-smi">actorsHeight_</span>);</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">actorEnsureDistance</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">d</span>) {</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">assert</span>(a <span class="pl-k">&lt;</span> b, <span class="pl-s"><span class="pl-pds">&#39;</span>a must be less than or equal to b<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (a <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Ensure b has left margin</span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">        b <span class="pl-k">=</span> actors[b];</td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">b</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(d <span class="pl-k">-</span> <span class="pl-smi">b</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>, <span class="pl-smi">b</span>.<span class="pl-c1">x</span>);</td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (b <span class="pl-k">&gt;=</span> <span class="pl-smi">actors</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Ensure a has right margin</span></td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">        a <span class="pl-k">=</span> actors[a];</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">a</span>.<span class="pl-c1">paddingRight</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(d, <span class="pl-smi">a</span>.<span class="pl-c1">paddingRight</span>);</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">        a <span class="pl-k">=</span> actors[a];</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">a</span>.<span class="pl-smi">distances</span>[b] <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(d, <span class="pl-smi">a</span>.<span class="pl-smi">distances</span>[b] <span class="pl-k">?</span> <span class="pl-smi">a</span>.<span class="pl-smi">distances</span>[b] <span class="pl-k">:</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">_</span>.<span class="pl-en">each</span>(signals, <span class="pl-k">function</span>(<span class="pl-smi">s</span>) {</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Indexes of the left and right actors involved</span></td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> a;</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> b;</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> bb <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">textBBox</span>(<span class="pl-smi">s</span>.<span class="pl-smi">message</span>, font);</td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span>var bb = t.attr(&quot;text&quot;, s.message).getBBox();</span></td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">s</span>.<span class="pl-smi">textBB</span> <span class="pl-k">=</span> bb;</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">s</span>.<span class="pl-c1">width</span>   <span class="pl-k">=</span> <span class="pl-smi">bb</span>.<span class="pl-c1">width</span>;</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">s</span>.<span class="pl-c1">height</span>  <span class="pl-k">=</span> <span class="pl-smi">bb</span>.<span class="pl-c1">height</span>;</td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> extraWidth <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">s</span>.<span class="pl-c1">type</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Signal<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">s</span>.<span class="pl-c1">width</span>  <span class="pl-k">+=</span> (<span class="pl-c1">SIGNAL_MARGIN</span> <span class="pl-k">+</span> <span class="pl-c1">SIGNAL_PADDING</span>) <span class="pl-k">*</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">s</span>.<span class="pl-c1">height</span> <span class="pl-k">+=</span> (<span class="pl-c1">SIGNAL_MARGIN</span> <span class="pl-k">+</span> <span class="pl-c1">SIGNAL_PADDING</span>) <span class="pl-k">*</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">s</span>.<span class="pl-en">isSelf</span>()) {</td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span> TODO Self signals need a min height</span></td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">          a <span class="pl-k">=</span> <span class="pl-smi">s</span>.<span class="pl-smi">actorA</span>.<span class="pl-c1">index</span>;</td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">          b <span class="pl-k">=</span> a <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">s</span>.<span class="pl-c1">width</span> <span class="pl-k">+=</span> <span class="pl-c1">SELF_SIGNAL_WIDTH</span>;</td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">          a <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-smi">s</span>.<span class="pl-smi">actorA</span>.<span class="pl-c1">index</span>, <span class="pl-smi">s</span>.<span class="pl-smi">actorB</span>.<span class="pl-c1">index</span>);</td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">          b <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-smi">s</span>.<span class="pl-smi">actorA</span>.<span class="pl-c1">index</span>, <span class="pl-smi">s</span>.<span class="pl-smi">actorB</span>.<span class="pl-c1">index</span>);</td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">s</span>.<span class="pl-c1">type</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Note<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">s</span>.<span class="pl-c1">width</span>  <span class="pl-k">+=</span> (<span class="pl-c1">NOTE_MARGIN</span> <span class="pl-k">+</span> <span class="pl-c1">NOTE_PADDING</span>) <span class="pl-k">*</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">s</span>.<span class="pl-c1">height</span> <span class="pl-k">+=</span> (<span class="pl-c1">NOTE_MARGIN</span> <span class="pl-k">+</span> <span class="pl-c1">NOTE_PADDING</span>) <span class="pl-k">*</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> HACK lets include the actor&#39;s padding</span></td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">        extraWidth <span class="pl-k">=</span> <span class="pl-c1">2</span> <span class="pl-k">*</span> <span class="pl-c1">ACTOR_MARGIN</span>;</td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">s</span>.<span class="pl-smi">placement</span> <span class="pl-k">==</span> <span class="pl-c1">PLACEMENT</span>.<span class="pl-c1">LEFTOF</span>) {</td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line">          b <span class="pl-k">=</span> <span class="pl-smi">s</span>.<span class="pl-smi">actor</span>.<span class="pl-c1">index</span>;</td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">          a <span class="pl-k">=</span> b <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">s</span>.<span class="pl-smi">placement</span> <span class="pl-k">==</span> <span class="pl-c1">PLACEMENT</span>.<span class="pl-c1">RIGHTOF</span>) {</td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">          a <span class="pl-k">=</span> <span class="pl-smi">s</span>.<span class="pl-smi">actor</span>.<span class="pl-c1">index</span>;</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">          b <span class="pl-k">=</span> a <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">s</span>.<span class="pl-smi">placement</span> <span class="pl-k">==</span> <span class="pl-c1">PLACEMENT</span>.<span class="pl-c1">OVER</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">s</span>.<span class="pl-en">hasManyActors</span>()) {</td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span> Over multiple actors</span></td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">          a <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-smi">s</span>.<span class="pl-smi">actor</span>[<span class="pl-c1">0</span>].<span class="pl-c1">index</span>, <span class="pl-smi">s</span>.<span class="pl-smi">actor</span>[<span class="pl-c1">1</span>].<span class="pl-c1">index</span>);</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">          b <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-smi">s</span>.<span class="pl-smi">actor</span>[<span class="pl-c1">0</span>].<span class="pl-c1">index</span>, <span class="pl-smi">s</span>.<span class="pl-smi">actor</span>[<span class="pl-c1">1</span>].<span class="pl-c1">index</span>);</td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span> We don&#39;t need our padding, and we want to overlap</span></td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">          extraWidth <span class="pl-k">=</span> <span class="pl-k">-</span>(<span class="pl-c1">NOTE_PADDING</span> <span class="pl-k">*</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-c1">NOTE_OVERLAP</span> <span class="pl-k">*</span> <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">s</span>.<span class="pl-smi">placement</span> <span class="pl-k">==</span> <span class="pl-c1">PLACEMENT</span>.<span class="pl-c1">OVER</span>) {</td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span> Over single actor</span></td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line">          a <span class="pl-k">=</span> <span class="pl-smi">s</span>.<span class="pl-smi">actor</span>.<span class="pl-c1">index</span>;</td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">actorEnsureDistance</span>(a <span class="pl-k">-</span> <span class="pl-c1">1</span>, a, <span class="pl-smi">s</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">actorEnsureDistance</span>(a, a <span class="pl-k">+</span> <span class="pl-c1">1</span>, <span class="pl-smi">s</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-smi">signalsHeight_</span> <span class="pl-k">+=</span> <span class="pl-smi">s</span>.<span class="pl-c1">height</span>;</td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span>; <span class="pl-c"><span class="pl-c">//</span> Bail out early</span></td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Unhandled signal type:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">s</span>.<span class="pl-c1">type</span>);</td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">actorEnsureDistance</span>(a, b, <span class="pl-smi">s</span>.<span class="pl-c1">width</span> <span class="pl-k">+</span> extraWidth);</td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">signalsHeight_</span> <span class="pl-k">+=</span> <span class="pl-smi">s</span>.<span class="pl-c1">height</span>;</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Re-jig the positions</span></td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> actorsX <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">_</span>.<span class="pl-en">each</span>(actors, <span class="pl-k">function</span>(<span class="pl-smi">a</span>) {</td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">a</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(actorsX, <span class="pl-smi">a</span>.<span class="pl-c1">x</span>);</td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> TODO This only works if we loop in sequence, 0, 1, 2, etc</span></td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">_</span>.<span class="pl-en">each</span>(<span class="pl-smi">a</span>.<span class="pl-smi">distances</span>, <span class="pl-k">function</span>(<span class="pl-smi">distance</span>, <span class="pl-smi">b</span>) {</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> lodash (and possibly others) do not like sparse arrays</span></td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> so sometimes they return undefined</span></td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> distance <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line">        b <span class="pl-k">=</span> actors[b];</td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line">        distance <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(distance, <span class="pl-smi">a</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>, <span class="pl-smi">b</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">b</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-smi">b</span>.<span class="pl-c1">x</span>, <span class="pl-smi">a</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-smi">a</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> distance <span class="pl-k">-</span> <span class="pl-smi">b</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">      actorsX <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-smi">a</span>.<span class="pl-c1">width</span> <span class="pl-k">+</span> <span class="pl-smi">a</span>.<span class="pl-c1">paddingRight</span>;</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">diagram</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(actorsX, <span class="pl-smi">diagram</span>.<span class="pl-c1">width</span>);</td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> TODO Refactor a little</span></td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">diagram</span>.<span class="pl-c1">width</span>  <span class="pl-k">+=</span> <span class="pl-c1">2</span> <span class="pl-k">*</span> <span class="pl-c1">DIAGRAM_MARGIN</span>;</td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">diagram</span>.<span class="pl-c1">height</span> <span class="pl-k">+=</span> <span class="pl-c1">2</span> <span class="pl-k">*</span> <span class="pl-c1">DIAGRAM_MARGIN</span> <span class="pl-k">+</span> <span class="pl-c1">2</span> <span class="pl-k">*</span> <span class="pl-c1">this</span>.<span class="pl-smi">actorsHeight_</span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">signalsHeight_</span>;</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> TODO Instead of one textBBox function, create a function for each element type, e.g</span></td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>      layout_title, layout_actor, etc that returns it&#39;s bounding box</span></td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">textBBox</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">text</span>, <span class="pl-smi">font</span>) {},</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">drawTitle</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> title <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">title_</span>;</td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (title) {</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">drawTextBox</span>(title, <span class="pl-smi">title</span>.<span class="pl-smi">message</span>, <span class="pl-c1">TITLE_MARGIN</span>, <span class="pl-c1">TITLE_PADDING</span>, <span class="pl-c1">this</span>.<span class="pl-smi">font_</span>, <span class="pl-c1">ALIGN_LEFT</span>);</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">drawActors</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">offsetY</span>) {</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> y <span class="pl-k">=</span> offsetY;</td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">_</span>.<span class="pl-en">each</span>(<span class="pl-c1">this</span>.<span class="pl-smi">diagram</span>.<span class="pl-smi">actors</span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>) {</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Top box</span></td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">drawActor</span>(a, y, <span class="pl-c1">this</span>.<span class="pl-smi">actorsHeight_</span>);</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Bottom box</span></td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">drawActor</span>(a, y <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">actorsHeight_</span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">signalsHeight_</span>, <span class="pl-c1">this</span>.<span class="pl-smi">actorsHeight_</span>);</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Veritical line</span></td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> aX <span class="pl-k">=</span> <span class="pl-en">getCenterX</span>(a);</td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">drawLine</span>(</td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">       aX, y <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">actorsHeight_</span> <span class="pl-k">-</span> <span class="pl-c1">ACTOR_MARGIN</span>,</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">       aX, y <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">actorsHeight_</span> <span class="pl-k">+</span> <span class="pl-c1">ACTOR_MARGIN</span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">signalsHeight_</span>);</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">drawActor</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">actor</span>, <span class="pl-smi">offsetY</span>, <span class="pl-smi">height</span>) {</td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">actor</span>.<span class="pl-c1">y</span>      <span class="pl-k">=</span> offsetY;</td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">actor</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> height;</td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">drawTextBox</span>(actor, <span class="pl-smi">actor</span>.<span class="pl-c1">name</span>, <span class="pl-c1">ACTOR_MARGIN</span>, <span class="pl-c1">ACTOR_PADDING</span>, <span class="pl-c1">this</span>.<span class="pl-smi">font_</span>, <span class="pl-c1">ALIGN_CENTER</span>);</td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">drawSignals</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">offsetY</span>) {</td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> y <span class="pl-k">=</span> offsetY;</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">_</span>.<span class="pl-en">each</span>(<span class="pl-c1">this</span>.<span class="pl-smi">diagram</span>.<span class="pl-smi">signals</span>, <span class="pl-k">function</span>(<span class="pl-smi">s</span>) {</td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> TODO Add debug mode, that draws padding/margin box</span></td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">s</span>.<span class="pl-c1">type</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Signal<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">s</span>.<span class="pl-en">isSelf</span>()) {</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-en">drawSelfSignal</span>(s, y);</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-en">drawSignal</span>(s, y);</td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">s</span>.<span class="pl-c1">type</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Note<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">drawNote</span>(s, y);</td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line">      y <span class="pl-k">+=</span> <span class="pl-smi">s</span>.<span class="pl-c1">height</span>;</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">drawSelfSignal</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">signal</span>, <span class="pl-smi">offsetY</span>) {</td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">assert</span>(<span class="pl-smi">signal</span>.<span class="pl-en">isSelf</span>(), <span class="pl-s"><span class="pl-pds">&#39;</span>signal must be a self signal<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> textBB <span class="pl-k">=</span> <span class="pl-smi">signal</span>.<span class="pl-smi">textBB</span>;</td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> aX <span class="pl-k">=</span> <span class="pl-en">getCenterX</span>(<span class="pl-smi">signal</span>.<span class="pl-smi">actorA</span>);</td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> x <span class="pl-k">=</span> aX <span class="pl-k">+</span> <span class="pl-c1">SELF_SIGNAL_WIDTH</span> <span class="pl-k">+</span> <span class="pl-c1">SIGNAL_PADDING</span>;</td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> y <span class="pl-k">=</span> offsetY <span class="pl-k">+</span> <span class="pl-c1">SIGNAL_PADDING</span> <span class="pl-k">+</span> <span class="pl-smi">signal</span>.<span class="pl-c1">height</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-smi">textBB</span>.<span class="pl-c1">y</span>;</td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">drawText</span>(x, y, <span class="pl-smi">signal</span>.<span class="pl-smi">message</span>, <span class="pl-c1">this</span>.<span class="pl-smi">font_</span>, <span class="pl-c1">ALIGN_LEFT</span>);</td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> y1 <span class="pl-k">=</span> offsetY <span class="pl-k">+</span> <span class="pl-c1">SIGNAL_MARGIN</span> <span class="pl-k">+</span> <span class="pl-c1">SIGNAL_PADDING</span>;</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> y2 <span class="pl-k">=</span> y1 <span class="pl-k">+</span> <span class="pl-smi">signal</span>.<span class="pl-c1">height</span> <span class="pl-k">-</span> <span class="pl-c1">2</span> <span class="pl-k">*</span> <span class="pl-c1">SIGNAL_MARGIN</span> <span class="pl-k">-</span> <span class="pl-c1">SIGNAL_PADDING</span>;</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Draw three lines, the last one with a arrow</span></td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">drawLine</span>(aX, y1, aX <span class="pl-k">+</span> <span class="pl-c1">SELF_SIGNAL_WIDTH</span>, y1, <span class="pl-smi">signal</span>.<span class="pl-smi">linetype</span>);</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">drawLine</span>(aX <span class="pl-k">+</span> <span class="pl-c1">SELF_SIGNAL_WIDTH</span>, y1, aX <span class="pl-k">+</span> <span class="pl-c1">SELF_SIGNAL_WIDTH</span>, y2, <span class="pl-smi">signal</span>.<span class="pl-smi">linetype</span>);</td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">drawLine</span>(aX <span class="pl-k">+</span> <span class="pl-c1">SELF_SIGNAL_WIDTH</span>, y2, aX, y2, <span class="pl-smi">signal</span>.<span class="pl-smi">linetype</span>, <span class="pl-smi">signal</span>.<span class="pl-smi">arrowtype</span>);</td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">drawSignal</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">signal</span>, <span class="pl-smi">offsetY</span>) {</td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> aX <span class="pl-k">=</span> <span class="pl-en">getCenterX</span>(<span class="pl-smi">signal</span>.<span class="pl-smi">actorA</span>);</td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bX <span class="pl-k">=</span> <span class="pl-en">getCenterX</span>(<span class="pl-smi">signal</span>.<span class="pl-smi">actorB</span>);</td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Mid point between actors</span></td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> x <span class="pl-k">=</span> (bX <span class="pl-k">-</span> aX) <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> aX;</td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> y <span class="pl-k">=</span> offsetY <span class="pl-k">+</span> <span class="pl-c1">SIGNAL_MARGIN</span> <span class="pl-k">+</span> <span class="pl-c1">2</span> <span class="pl-k">*</span> <span class="pl-c1">SIGNAL_PADDING</span>;</td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Draw the text in the middle of the signal</span></td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">drawText</span>(x, y, <span class="pl-smi">signal</span>.<span class="pl-smi">message</span>, <span class="pl-c1">this</span>.<span class="pl-smi">font_</span>, <span class="pl-c1">ALIGN_CENTER</span>);</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Draw the line along the bottom of the signal</span></td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line">    y <span class="pl-k">=</span> offsetY <span class="pl-k">+</span> <span class="pl-smi">signal</span>.<span class="pl-c1">height</span> <span class="pl-k">-</span> <span class="pl-c1">SIGNAL_MARGIN</span> <span class="pl-k">-</span> <span class="pl-c1">SIGNAL_PADDING</span>;</td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">drawLine</span>(aX, y, bX, y, <span class="pl-smi">signal</span>.<span class="pl-smi">linetype</span>, <span class="pl-smi">signal</span>.<span class="pl-smi">arrowtype</span>);</td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">drawNote</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">note</span>, <span class="pl-smi">offsetY</span>) {</td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">note</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> offsetY;</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> actorA <span class="pl-k">=</span> <span class="pl-smi">note</span>.<span class="pl-en">hasManyActors</span>() <span class="pl-k">?</span> <span class="pl-smi">note</span>.<span class="pl-smi">actor</span>[<span class="pl-c1">0</span>] <span class="pl-k">:</span> <span class="pl-smi">note</span>.<span class="pl-smi">actor</span>;</td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> aX <span class="pl-k">=</span> <span class="pl-en">getCenterX</span>(actorA);</td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">switch</span> (<span class="pl-smi">note</span>.<span class="pl-smi">placement</span>) {</td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">case</span> <span class="pl-c1">PLACEMENT</span>.<span class="pl-c1">RIGHTOF</span>:</td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">note</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> aX <span class="pl-k">+</span> <span class="pl-c1">ACTOR_MARGIN</span>;</td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">case</span> <span class="pl-c1">PLACEMENT</span>.<span class="pl-c1">LEFTOF</span>:</td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">note</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> aX <span class="pl-k">-</span> <span class="pl-c1">ACTOR_MARGIN</span> <span class="pl-k">-</span> <span class="pl-smi">note</span>.<span class="pl-c1">width</span>;</td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">case</span> <span class="pl-c1">PLACEMENT</span>.<span class="pl-c1">OVER</span>:</td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">note</span>.<span class="pl-en">hasManyActors</span>()) {</td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> bX <span class="pl-k">=</span> <span class="pl-en">getCenterX</span>(<span class="pl-smi">note</span>.<span class="pl-smi">actor</span>[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> overlap <span class="pl-k">=</span> <span class="pl-c1">NOTE_OVERLAP</span> <span class="pl-k">+</span> <span class="pl-c1">NOTE_PADDING</span>;</td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">note</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(aX, bX) <span class="pl-k">-</span> overlap;</td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">note</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> (<span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(aX, bX) <span class="pl-k">+</span> overlap) <span class="pl-k">-</span> <span class="pl-smi">note</span>.<span class="pl-c1">x</span>;</td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">note</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> aX <span class="pl-k">-</span> <span class="pl-smi">note</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">default</span>:</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Unhandled note placement: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">note</span>.<span class="pl-smi">placement</span>);</td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">drawTextBox</span>(note, <span class="pl-smi">note</span>.<span class="pl-smi">message</span>, <span class="pl-c1">NOTE_MARGIN</span>, <span class="pl-c1">NOTE_PADDING</span>, <span class="pl-c1">this</span>.<span class="pl-smi">font_</span>, <span class="pl-c1">ALIGN_LEFT</span>);</td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code blob-code-inner js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Draw text surrounded by a box</span></td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   */</span></td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">drawTextBox</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">box</span>, <span class="pl-smi">text</span>, <span class="pl-smi">margin</span>, <span class="pl-smi">padding</span>, <span class="pl-smi">font</span>, <span class="pl-smi">align</span>) {</td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">box</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> margin;</td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> y <span class="pl-k">=</span> <span class="pl-smi">box</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> margin;</td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> w <span class="pl-k">=</span> <span class="pl-smi">box</span>.<span class="pl-c1">width</span>  <span class="pl-k">-</span> <span class="pl-c1">2</span> <span class="pl-k">*</span> margin;</td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> h <span class="pl-k">=</span> <span class="pl-smi">box</span>.<span class="pl-c1">height</span> <span class="pl-k">-</span> <span class="pl-c1">2</span> <span class="pl-k">*</span> margin;</td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Draw inner box</span></td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">drawRect</span>(x, y, w, h);</td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Draw text (in the center)</span></td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (align <span class="pl-k">==</span> <span class="pl-c1">ALIGN_CENTER</span>) {</td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code blob-code-inner js-file-line">      x <span class="pl-k">=</span> <span class="pl-en">getCenterX</span>(box);</td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code blob-code-inner js-file-line">      y <span class="pl-k">=</span> <span class="pl-en">getCenterY</span>(box);</td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code blob-code-inner js-file-line">      x <span class="pl-k">+=</span> padding;</td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code blob-code-inner js-file-line">      y <span class="pl-k">+=</span> padding;</td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">drawText</span>(x, y, text, font, align);</td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code blob-code-inner js-file-line">});</td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/** js sequence diagrams</span></td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  https://bramp.github.io/js-sequence-diagrams/</span></td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  (c) 2012-2017 Andrew Brampton (bramp.net)</span></td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Simplified BSD license.</span></td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*global Diagram, Raphael, _ */</span></td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">typeof</span> Raphael <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">LINE</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>stroke<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#000000<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>stroke-width<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">RECT</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>stroke<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#000000<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>stroke-width<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#fff<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/******************</span></td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Raphaël extras</span></td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   ******************/</span></td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Raphael</span>.<span class="pl-smi">fn</span>.<span class="pl-en">line</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">x1</span>, <span class="pl-smi">y1</span>, <span class="pl-smi">x2</span>, <span class="pl-smi">y2</span>) {</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">assert</span>(<span class="pl-smi">_</span>.<span class="pl-c1">all</span>([x1,x2,y1,y2], <span class="pl-smi">_</span>.<span class="pl-smi">isFinite</span>), <span class="pl-s"><span class="pl-pds">&#39;</span>x1,x2,y1,y2 must be numeric<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">path</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>M{0},{1} L{2},{3}<span class="pl-pds">&#39;</span></span>, x1, y1, x2, y2);</td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/******************</span></td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * RaphaelTheme</span></td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   ******************/</span></td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">RaphaelTheme</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">diagram</span>, <span class="pl-smi">options</span>, <span class="pl-smi">resume</span>) {</td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">init</span>(diagram, <span class="pl-smi">_</span>.<span class="pl-en">defaults</span>(options, {</td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>font-size<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">16</span>,</td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>font-family<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Andale Mono, monospace<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code blob-code-inner js-file-line">          }), resume);</td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">extend</span>(<span class="pl-smi">RaphaelTheme</span>.<span class="pl-c1">prototype</span>, <span class="pl-smi">BaseTheme</span>.<span class="pl-c1">prototype</span>, {</td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">init</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">diagram</span>, <span class="pl-smi">options</span>, <span class="pl-smi">resume</span>) {</td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">BaseTheme</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">init</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, diagram);</td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span>  <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">font_</span>   <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>font-size<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> options[<span class="pl-s"><span class="pl-pds">&#39;</span>font-size<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>font-family<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> options[<span class="pl-s"><span class="pl-pds">&#39;</span>font-family<span class="pl-pds">&#39;</span></span>]</td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> a <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">arrowTypes_</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code blob-code-inner js-file-line">      a[<span class="pl-c1">ARROWTYPE</span>.<span class="pl-c1">FILLED</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code blob-code-inner js-file-line">      a[<span class="pl-c1">ARROWTYPE</span>.<span class="pl-c1">OPEN</span>]   <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>open<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> l <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">lineTypes_</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code blob-code-inner js-file-line">      l[<span class="pl-c1">LINETYPE</span>.<span class="pl-c1">SOLID</span>]  <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code blob-code-inner js-file-line">      l[<span class="pl-c1">LINETYPE</span>.<span class="pl-c1">DOTTED</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">resume</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setupPaper</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">container</span>) {</td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Raphael</span>(container, <span class="pl-c1">320</span>, <span class="pl-c1">200</span>);</td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span>.<span class="pl-c1">setStart</span>();</td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">draw</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">container</span>) {</td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">BaseTheme</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">draw</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, container);</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span>.<span class="pl-en">setFinish</span>();</td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">layout</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">BaseTheme</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">layout</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span>.<span class="pl-en">setSize</span>(</td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code blob-code-inner js-file-line">       <span class="pl-c1">this</span>.<span class="pl-smi">diagram</span>.<span class="pl-c1">width</span>,</td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code blob-code-inner js-file-line">       <span class="pl-c1">this</span>.<span class="pl-smi">diagram</span>.<span class="pl-c1">height</span></td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code blob-code-inner js-file-line">      );</td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Strip whitespace from each newline</span></td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">cleanText</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">text</span>) {</td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code blob-code-inner js-file-line">      text <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">invoke</span>(<span class="pl-smi">text</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>), <span class="pl-s"><span class="pl-pds">&#39;</span>trim<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">text</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Returns the text&#39;s bounding box</span></td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">textBBox</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">text</span>, <span class="pl-smi">font</span>) {</td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code blob-code-inner js-file-line">      text <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">cleanText</span>(text);</td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code blob-code-inner js-file-line">      font <span class="pl-k">=</span> font <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> p;</td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">font</span>.<span class="pl-smi">obj_</span>) {</td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code blob-code-inner js-file-line">        p <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span>.<span class="pl-c1">print</span>(<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, text, <span class="pl-smi">font</span>.<span class="pl-smi">obj_</span>, font[<span class="pl-s"><span class="pl-pds">&#39;</span>font-size<span class="pl-pds">&#39;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code blob-code-inner js-file-line">        p <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span>.<span class="pl-c1">text</span>(<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, text);</td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">p</span>.<span class="pl-en">attr</span>(font);</td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> bb <span class="pl-k">=</span> <span class="pl-smi">p</span>.<span class="pl-en">getBBox</span>();</td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">p</span>.<span class="pl-c1">remove</span>();</td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> bb;</td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">drawLine</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">x1</span>, <span class="pl-smi">y1</span>, <span class="pl-smi">x2</span>, <span class="pl-smi">y2</span>, <span class="pl-smi">linetype</span>, <span class="pl-smi">arrowhead</span>) {</td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> line <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span>.<span class="pl-en">line</span>(x1, y1, x2, y2).<span class="pl-en">attr</span>(<span class="pl-c1">LINE</span>);</td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (arrowhead <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">line</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>arrow-end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">arrowTypes_</span>[arrowhead] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>-wide-long<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (arrowhead <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">line</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke-dasharray<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">lineTypes_</span>[linetype]);</td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> line;</td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">drawRect</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">x</span>, <span class="pl-smi">y</span>, <span class="pl-smi">w</span>, <span class="pl-smi">h</span>) {</td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span>.<span class="pl-en">rect</span>(x, y, w, h).<span class="pl-en">attr</span>(<span class="pl-c1">RECT</span>);</td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Draws text with a optional white background</span></td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * x,y (int) x,y top left point of the text, or the center of the text (depending on align param)</span></td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * text (string) text to print</span></td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * font (Object)</span></td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * align (string) ALIGN_LEFT or ALIGN_CENTER</span></td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">drawText</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">x</span>, <span class="pl-smi">y</span>, <span class="pl-smi">text</span>, <span class="pl-smi">font</span>, <span class="pl-smi">align</span>) {</td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code blob-code-inner js-file-line">      text <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">cleanText</span>(text);</td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code blob-code-inner js-file-line">      font <span class="pl-k">=</span> font <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code blob-code-inner js-file-line">      align <span class="pl-k">=</span> align <span class="pl-k">||</span> <span class="pl-c1">ALIGN_LEFT</span>;</td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> paper <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span>;</td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> bb <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">textBBox</span>(text, font);</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (align <span class="pl-k">==</span> <span class="pl-c1">ALIGN_CENTER</span>) {</td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code blob-code-inner js-file-line">        x <span class="pl-k">=</span> x <span class="pl-k">-</span> <span class="pl-smi">bb</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code blob-code-inner js-file-line">        y <span class="pl-k">=</span> y <span class="pl-k">-</span> <span class="pl-smi">bb</span>.<span class="pl-c1">height</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> t;</td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">font</span>.<span class="pl-smi">obj_</span>) {</td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> When using a font, we have to use .print(..)</span></td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code blob-code-inner js-file-line">        t <span class="pl-k">=</span> <span class="pl-smi">paper</span>.<span class="pl-c1">print</span>(x <span class="pl-k">-</span> <span class="pl-smi">bb</span>.<span class="pl-c1">x</span>, y <span class="pl-k">-</span> <span class="pl-smi">bb</span>.<span class="pl-c1">y</span>, text, <span class="pl-smi">font</span>.<span class="pl-smi">obj_</span>, font[<span class="pl-s"><span class="pl-pds">&#39;</span>font-size<span class="pl-pds">&#39;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code blob-code-inner js-file-line">        t <span class="pl-k">=</span> <span class="pl-smi">paper</span>.<span class="pl-c1">text</span>(x <span class="pl-k">-</span> <span class="pl-smi">bb</span>.<span class="pl-c1">x</span> <span class="pl-k">-</span> <span class="pl-smi">bb</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>, y <span class="pl-k">-</span> <span class="pl-smi">bb</span>.<span class="pl-c1">y</span>, text);</td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">t</span>.<span class="pl-en">attr</span>(font);</td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">t</span>.<span class="pl-en">attr</span>({<span class="pl-s"><span class="pl-pds">&#39;</span>text-anchor<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>start<span class="pl-pds">&#39;</span></span>});</td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> t;</td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">/******************</span></td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * RaphaelHandTheme</span></td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   ******************/</span></td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">RaphaelHandTheme</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">diagram</span>, <span class="pl-smi">options</span>, <span class="pl-smi">resume</span>) {</td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">init</span>(diagram, <span class="pl-smi">_</span>.<span class="pl-en">defaults</span>(options, {</td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>font-size<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">16</span>,</td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>font-family<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>daniel<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code blob-code-inner js-file-line">            }), resume);</td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Take the standard RaphaelTheme and make all the lines wobbly</span></td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">extend</span>(<span class="pl-smi">RaphaelHandTheme</span>.<span class="pl-c1">prototype</span>, <span class="pl-smi">RaphaelTheme</span>.<span class="pl-c1">prototype</span>, {</td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setupPaper</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">container</span>) {</td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">RaphaelTheme</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">setupPaper</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, container);</td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">font_</span>.<span class="pl-smi">obj_</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span>.<span class="pl-en">getFont</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>daniel<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code blob-code-inner js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">drawLine</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">x1</span>, <span class="pl-smi">y1</span>, <span class="pl-smi">x2</span>, <span class="pl-smi">y2</span>, <span class="pl-smi">linetype</span>, <span class="pl-smi">arrowhead</span>) {</td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> line <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span>.<span class="pl-en">path</span>(<span class="pl-en">handLine</span>(x1, y1, x2, y2)).<span class="pl-en">attr</span>(<span class="pl-c1">LINE</span>);</td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (arrowhead <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">line</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>arrow-end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">arrowTypes_</span>[arrowhead] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>-wide-long<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (arrowhead <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">line</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>stroke-dasharray<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">lineTypes_</span>[linetype]);</td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> line;</td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">drawRect</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">x</span>, <span class="pl-smi">y</span>, <span class="pl-smi">w</span>, <span class="pl-smi">h</span>) {</td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">paper_</span>.<span class="pl-en">path</span>(<span class="pl-en">handRect</span>(x, y, w, h)).<span class="pl-en">attr</span>(<span class="pl-c1">RECT</span>);</td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">registerTheme</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>raphaelSimple<span class="pl-pds">&#39;</span></span>, RaphaelTheme);</td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">registerTheme</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>raphaelHand<span class="pl-pds">&#39;</span></span>,   RaphaelHandTheme);</td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The following copyright notice may not be removed under any circumstances.</span></td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright:</span></td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright (c) 2011 by Daniel Midgley. All rights reserved.</span></td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Trademark:</span></td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Please refer to the Copyright section for the font trademark attribution</span></td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * notices.</span></td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Full name:</span></td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Daniel-Bold</span></td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Description:</span></td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Daniel Bold is a font by Daniel Midgley.</span></td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Designer:</span></td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Daniel Midgley</span></td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Vendor URL:</span></td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * http://goodreasonblog.blogspot.com/p/fontery.html</span></td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * License information:</span></td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * http://creativecommons.org/licenses/by-nd/3.0/</span></td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">typeof</span> Raphael <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Raphael</span>.<span class="pl-en">registerFont</span>({</td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">209</span>,</td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&quot;</span>face<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>font-family<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Daniel<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>font-weight<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">700</span>,</td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>font-stretch<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>normal<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>units-per-em<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>360<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>panose-1<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>2 11 8 0 0 0 0 0 0 0<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>ascent<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>288<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>descent<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>-72<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>x-height<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>7<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>bbox<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>-92.0373 -310.134 519 184.967<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>underline-thickness<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>3.51562<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>underline-position<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>-25.1367<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>unicode-range<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>U+0009-U+F002<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&quot;</span>glyphs<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">179</span></td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\t</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">179</span></td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">179</span></td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>!<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>66,-306v9,3,18,11,19,24v-18,73,-20,111,-37,194v0,10,2,34,-12,34v-12,0,-18,-9,-18,-28v0,-85,23,-136,38,-214v1,-7,4,-10,10,-10xm25,-30v15,-1,28,34,5,35v-11,-1,-38,-36,-5,-35<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">115</span></td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>91,-214v-32,3,-25,-40,-20,-68v3,-16,7,-25,12,-27v35,13,14,56,8,95xm8,-231v4,-31,1,-40,18,-75v37,7,11,51,11,79v-3,3,-4,8,-5,13v-17,4,-16,-10,-24,-17<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">117</span></td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>271,-64v-30,26,-96,-7,-102,51v-6,2,-13,2,-24,-2v-2,-11,10,-21,2,-28v-14,5,-48,0,-48,22v0,23,-11,14,-29,10v-7,-6,6,-19,-1,-24r-32,4v-19,-8,-15,-24,5,-28r33,-6v4,0,24,-23,11,-27v-26,0,-63,14,-74,-10v3,-1,9,-17,16,-10v15,-8,81,4,89,-30v8,-14,16,-34,24,-38v23,9,24,38,5,49v37,24,55,-38,72,-43v19,10,20,23,-1,45v2,8,23,1,29,4v3,3,6,6,10,11v-14,13,-20,12,-45,12v-17,0,-16,17,-19,29v18,-7,49,3,67,-2v4,0,8,4,12,11xm161,-104v-30,-1,-44,10,-44,37v14,1,24,0,40,-5v0,-1,3,-10,8,-26v0,-4,-1,-6,-4,-6<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">285</span></td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>$<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>164,-257v29,4,1,42,-3,50v5,5,38,13,41,24v8,4,6,15,-2,21v-18,3,-36,-17,-49,-17v-17,1,-31,40,-28,48v5,4,8,8,9,10v13,1,35,37,28,44v-10,21,-36,20,-65,28v-10,10,-12,40,-17,51v-9,-3,-28,1,-18,-17v0,-13,5,-24,-1,-35v-18,1,-59,-10,-42,-29v21,0,56,16,55,-16v5,-4,9,-18,9,-26v-14,-15,-55,-41,-53,-65v2,-33,56,-19,98,-26v10,-14,31,-43,38,-45xm93,-152v11,-10,15,-15,14,-29v-17,-3,-37,1,-43,6v10,12,20,19,29,23xm111,-103v-8,1,-11,12,-10,22v10,0,28,2,27,-8v0,-4,-13,-15,-17,-14<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">225</span></td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>181,-96v24,-7,67,-13,104,1v14,18,21,19,22,44v-13,43,-99,61,-146,36v-9,-9,-22,-11,-32,-29v0,-27,24,-53,52,-52xm139,-185v-9,68,-138,73,-131,-5v0,-3,3,-9,9,-17v13,1,27,1,17,-16v5,-39,63,0,93,-6v36,1,80,-9,102,11v15,32,12,32,-8,56v-16,21,-103,78,-152,125r-14,28v-23,11,-25,-7,-29,-20v34,-71,133,-98,171,-162v-13,-12,-52,-5,-61,1v0,1,1,3,3,5xm38,-190v0,34,55,29,70,8v0,-14,-20,-11,-32,-14v-14,-3,-24,-9,-40,-10v1,0,5,11,2,16xm172,-53v12,27,90,18,102,-5v-18,-7,-32,-10,-40,-10v-29,3,-57,-4,-62,15<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">308</span></td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>145,-82v17,-8,47,-15,71,-26v13,2,25,12,9,23v-23,7,-40,16,-53,27r0,6v13,8,30,21,36,38v0,8,-4,12,-11,12v-19,0,-43,-39,-59,-44v-30,12,-65,29,-97,32v-32,3,-45,-41,-23,-63v21,-20,52,-26,70,-48v-4,-31,-12,-47,9,-73v13,-16,20,-29,23,-39v15,-15,32,-22,51,-22v30,9,62,64,32,96v-2,3,-47,42,-69,48v-15,8,-11,9,0,22v6,7,10,11,11,11xm114,-138v25,-13,62,-38,74,-62v0,-9,-10,-31,-20,-29v-28,7,-60,42,-60,75v0,10,2,15,6,16xm99,-91v-18,10,-54,18,-59,45v26,5,61,-12,77,-22v-1,-5,-13,-23,-18,-23<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">253</span></td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>36,-182v-36,7,-34,-61,-17,-80v15,1,21,19,21,20r-1,-1v0,0,-1,12,-5,35v1,5,3,17,2,26<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">63</span></td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>130,-306v13,2,23,43,-1,43v-49,43,-77,77,-90,148v5,49,27,67,64,101v4,14,5,6,2,19r-15,0v-35,-17,-79,-58,-79,-120v0,-58,66,-176,119,-191<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">120</span></td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>108,-138v-2,73,-48,120,-98,153v-17,-5,-16,-20,-6,-31v52,-64,73,-62,74,-135v1,-42,-40,-98,-58,-128v0,-5,-1,-12,-2,-22v18,-18,25,0,42,27v25,39,50,66,48,136<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">120</span></td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>121,-271v15,-5,36,-8,40,9v-5,10,-31,19,-47,31v0,11,34,43,14,53v-18,8,-24,-24,-34,-20v-4,10,-4,19,-12,41v-25,7,-15,-30,-17,-47v-13,-1,-17,9,-46,30r-10,0v-20,-32,37,-43,54,-64v-10,-11,-36,-33,-16,-51v3,0,14,8,33,24v8,-10,26,-39,32,-42v14,7,15,23,9,36<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">177</span></td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>+<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>163,-64v-7,22,-65,2,-77,21v-2,10,-6,21,-11,35v-20,4,-21,-12,-19,-29v3,-23,-44,6,-39,-27v-8,-22,36,-8,49,-18v8,-13,6,-36,24,-40v19,-4,14,32,11,39v18,3,19,2,54,8v2,1,5,5,8,11<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">170</span></td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>25,63v-26,21,-48,-2,-22,-24v14,-12,35,-40,35,-69v3,-2,3,-11,12,-9v35,17,5,88,-25,102<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">97</span></td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>57,-94v19,4,55,-5,54,17v-15,23,-54,20,-91,15v-4,2,-13,-10,-11,-16v-1,-22,28,-15,48,-16<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">124</span></td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>40,-48v21,20,21,44,-4,44v-33,0,-26,-24,-10,-44r14,0<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">67</span></td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\/</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>21,20v-22,-45,21,-95,41,-126v38,-57,115,-158,193,-201v2,0,4,3,7,11v11,29,-15,34,-25,55v-81,56,-189,208,-197,261r-19,0<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">275</span></td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>78,-237v70,-47,269,-41,270,59v0,34,-11,53,-29,76v-13,35,-30,32,-85,64v-6,2,-10,6,-7,8v-73,14,-98,38,-173,1v-7,-13,-52,-48,-46,-88v9,-57,27,-75,70,-120xm123,-38v100,0,202,-46,195,-153v-32,-55,-144,-73,-211,-35v-16,34,-68,54,-53,108v6,25,1,22,-3,39v6,24,41,41,72,41<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">353</span></td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>1<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>39,-208v0,-14,6,-59,29,-39v3,4,6,13,10,24r-22,128r8,87v-4,6,-9,3,-16,2v-44,-38,-9,-137,-9,-202<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">93</span></td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>2<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>88,-35v47,-10,119,-24,168,-9v0,12,-23,13,-35,16v1,1,3,1,5,1v-74,8,-118,23,-194,23v-14,0,-20,-13,-21,-28v55,-40,83,-61,123,-104v26,-13,65,-67,71,-102v-1,-9,-11,-16,-22,-16v-20,-1,-120,29,-156,49v-10,-2,-30,-20,-10,-28v50,-21,111,-51,178,-48v25,10,44,22,36,39v12,30,-19,64,-34,83v-39,48,-37,39,-115,109v0,5,-3,8,-8,11v4,3,8,4,14,4<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">265</span></td>
      </tr>
      <tr>
        <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>3<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>188,-282v34,-10,74,25,47,51v-19,32,-55,50,-92,70v28,14,116,25,108,70v8,14,-49,40,-63,48v-29,9,-130,22,-168,42v-6,-5,-19,-7,-12,-22v56,-36,175,-21,210,-76v-9,-20,-88,-42,-97,-33v-20,-1,-41,2,-56,-7r5,-21v56,-25,103,-36,137,-78v1,-1,2,-5,4,-11v-15,-14,-56,7,-79,0v-10,9,-73,22,-92,31v-11,-4,-28,-23,-13,-30v50,-22,96,-26,154,-37v0,-1,8,3,7,3<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">260</span></td>
      </tr>
      <tr>
        <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>4<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>79,-249v-7,17,-29,75,-33,96v0,6,3,8,8,8v43,-2,111,6,141,-6v17,-47,20,-100,63,-148v9,4,16,7,21,10v-17,31,-44,95,-51,141v7,4,24,-4,23,10v-1,16,-29,12,-31,23v-10,22,-9,69,-7,103v-3,2,-7,5,-10,9v-47,-11,-23,-74,-16,-114v0,-4,-2,-6,-7,-6v-65,2,-89,13,-162,4v-22,-22,-2,-53,5,-76v16,-15,17,-57,35,-70v6,-1,21,11,21,16<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">267</span></td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>5<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>185,-272v30,7,45,-8,53,18v1,16,-17,18,-34,14v0,0,-95,-11,-129,1v-6,9,-24,33,-29,54v76,10,171,5,214,47v11,11,22,30,5,52v-14,12,-30,14,-34,27v-26,11,-141,63,-157,60v-16,-2,-25,-19,-4,-27v48,-18,128,-39,170,-86v4,-14,-65,-41,-85,-41r-92,0v-10,-4,-66,-1,-57,-23v0,-23,23,-51,35,-83v11,-28,133,-10,144,-13<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">284</span></td>
      </tr>
      <tr>
        <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>6<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>70,-64v9,-51,63,-74,123,-71v43,2,109,3,111,41r-25,47v0,1,1,2,2,3v-5,0,-39,10,-41,20v-15,3,-22,4,-22,11v-39,1,-77,20,-119,13v-42,-7,-35,-9,-77,-46v-56,-118,94,-201,176,-229v7,0,21,8,20,15v-2,17,-23,15,-43,24v-69,31,-119,72,-134,145v-5,25,36,68,78,64v59,-6,128,-18,153,-61v-7,-14,-13,-9,-32,-21v-67,-15,-118,-5,-150,43r0,12v-13,4,-17,-3,-20,-10<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">310</span></td>
      </tr>
      <tr>
        <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>7<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>37,-228v33,-14,173,-17,181,-19v28,-1,24,31,9,45v-17,15,-45,49,-59,69v-17,26,-55,67,-61,113v-10,13,-9,14,-14,20v-33,-13,-20,-25,-11,-53v16,-48,73,-115,109,-156v2,-7,5,-14,-10,-12v-26,4,-54,6,-76,13v-23,-5,-83,31,-94,-9v2,-8,18,-19,26,-11<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">245</span></td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>8<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>57,-236v40,-50,166,-51,213,-10v22,28,10,63,-22,78r-35,17v8,5,54,24,53,44v-5,14,-4,33,-18,42v-13,13,-35,18,-44,34v-60,27,-190,49,-194,-42v7,-41,17,-54,59,-70r0,-4v-32,-9,-73,-62,-26,-85v4,0,8,-2,14,-4xm142,-160v24,-2,160,-31,99,-72v-28,-18,-108,-33,-146,-5v-16,12,-28,30,-33,59v24,12,37,20,80,18xm41,-62v30,65,189,6,199,-37v3,-14,-60,-30,-74,-30v-70,0,-118,10,-125,67<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">290</span></td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>9<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>11,-192v15,-49,119,-61,161,-23v16,15,27,55,11,79v-20,62,-51,79,-96,118v-10,4,-45,27,-50,6v9,-15,66,-52,98,-99v-7,-7,-8,-3,-25,0v-49,-11,-96,-25,-99,-81xm145,-131v7,-5,13,-34,13,-41v-2,-51,-104,-38,-114,-6v-2,10,37,35,46,35v23,1,43,-1,55,12<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">198</span></td>
      </tr>
      <tr>
        <td id="L1618" class="blob-num js-line-number" data-line-number="1618"></td>
        <td id="LC1618" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1619" class="blob-num js-line-number" data-line-number="1619"></td>
        <td id="LC1619" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1620" class="blob-num js-line-number" data-line-number="1620"></td>
        <td id="LC1620" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>39,-125v15,-8,40,-1,40,15v0,15,-6,22,-19,22v-13,0,-29,-21,-21,-37xm66,-17v-8,27,-51,19,-46,-8v-1,-6,8,-22,14,-20v29,0,30,6,32,28<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1621" class="blob-num js-line-number" data-line-number="1621"></td>
        <td id="LC1621" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">95</span></td>
      </tr>
      <tr>
        <td id="L1622" class="blob-num js-line-number" data-line-number="1622"></td>
        <td id="LC1622" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1623" class="blob-num js-line-number" data-line-number="1623"></td>
        <td id="LC1623" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>;<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1624" class="blob-num js-line-number" data-line-number="1624"></td>
        <td id="LC1624" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>56,-93v2,-30,37,-22,40,2v0,2,-1,7,-3,15v-13,8,-15,6,-27,4xm64,-44v11,-11,30,-4,32,14v-21,39,-63,71,-92,85v-5,0,-11,-2,-18,-8v11,-23,36,-36,50,-61v11,-7,19,-20,28,-30<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1625" class="blob-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">107</span></td>
      </tr>
      <tr>
        <td id="L1626" class="blob-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1627" class="blob-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1628" class="blob-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>166,-202v12,0,29,15,24,29v0,4,-119,64,-120,73v15,21,89,64,91,86v2,29,-18,12,-30,15v-27,-29,-59,-54,-95,-75v-18,-10,-25,-13,-24,-41<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1629" class="blob-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">176</span></td>
      </tr>
      <tr>
        <td id="L1630" class="blob-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1631" class="blob-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>=<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1632" class="blob-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>125,-121v18,7,55,-9,69,14v0,17,-45,26,-135,26v-18,0,-27,-7,-27,-21v-1,-37,60,-5,93,-19xm138,-71v20,0,48,-1,50,16v-13,24,-86,32,-131,29v-29,-2,-43,-10,-43,-24v-7,-23,36,-14,39,-17v27,6,57,-4,85,-4<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1633" class="blob-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">196</span></td>
      </tr>
      <tr>
        <td id="L1634" class="blob-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1635" class="blob-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>&gt;<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1636" class="blob-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>4,-14v20,-48,77,-59,118,-94v-16,-19,-58,-52,-81,-75v-11,-7,-15,-38,-1,-40v33,16,83,71,121,105v26,23,-6,35,-41,53v-29,16,-56,28,-73,54v-21,15,-16,20,-34,15v-3,0,-9,-16,-9,-18<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1637" class="blob-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">174</span></td>
      </tr>
      <tr>
        <td id="L1638" class="blob-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1639" class="blob-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>?<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1640" class="blob-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>105,-291v57,-13,107,-4,107,39v0,67,-136,85,-155,137v-1,6,10,23,-4,23v-23,1,-33,-35,-23,-57v31,-41,124,-60,149,-103v-8,-21,-72,-5,-88,-1v-23,6,-59,39,-71,8v0,0,-1,0,1,-17v10,-4,45,-20,84,-29xm80,-25v-6,4,-8,39,-24,22v-24,3,-22,-21,-13,-35v17,-7,29,5,37,13<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1641" class="blob-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">216</span></td>
      </tr>
      <tr>
        <td id="L1642" class="blob-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1643" class="blob-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>@<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1644" class="blob-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>218,-207v23,8,42,14,47,37v44,68,-27,137,-87,85r1,0v0,2,-59,19,-61,17v-35,0,-42,-47,-17,-68r0,-4v-19,-1,-45,37,-49,40v-37,76,58,72,121,62v11,-2,34,-13,36,3v-14,31,-69,31,-114,33v-51,2,-99,-41,-80,-92v2,-30,22,-40,42,-63v35,-20,91,-53,161,-50xm217,-101v23,0,35,-19,35,-41v0,-43,-75,-41,-102,-19v36,3,55,16,62,41v-6,5,-6,19,5,19xm127,-110v8,5,51,-15,28,-16v-4,0,-25,4,-28,16<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1645" class="blob-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">291</span></td>
      </tr>
      <tr>
        <td id="L1646" class="blob-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1647" class="blob-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>A<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1648" class="blob-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>97,-81v-23,-10,-39,38,-52,60v-8,6,-8,6,-22,18v-22,-7,-23,-37,-4,-49v7,-8,11,-15,15,-23r-1,1v-14,-26,23,-29,31,-40v1,-1,15,-29,26,-36v17,-31,39,-58,54,-92v16,-20,20,-51,41,-66v29,5,34,62,45,92v9,64,21,103,49,155v-3,25,-44,11,-54,0v-34,-12,-97,-29,-128,-20xm107,-118v20,6,80,10,111,17v6,-7,-4,-15,-7,-24v-11,-28,-9,-92,-30,-117v-9,9,-19,44,-34,55v-9,23,-27,40,-40,69<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1649" class="blob-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">294</span></td>
      </tr>
      <tr>
        <td id="L1650" class="blob-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1651" class="blob-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>B<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1652" class="blob-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>256,-179v41,10,115,34,91,91v-6,3,-14,12,-19,20v-37,19,-50,34,-63,25v-9,10,-12,11,-34,13r3,-3v-4,-4,-12,-4,-18,0v0,0,2,2,5,4v-21,14,-26,6,-44,15v-4,0,-7,-2,-8,-5v-6,11,-20,-5,-18,11v-36,4,-91,35,-114,4v-7,-62,-10,-138,4,-199v-1,-19,-37,2,-37,-27v0,-8,2,-13,6,-15v68,-31,231,-92,311,-39v8,12,12,20,12,25v-8,42,-32,49,-77,80xm79,-160v72,-17,135,-39,184,-70v20,-13,31,-23,31,-27v1,-6,-30,-13,-38,-12v-54,0,-116,13,-186,41v11,21,1,48,9,68xm262,-43v0,-4,3,-6,-4,-5v0,1,1,2,4,5xm211,-140v-34,7,-94,24,-139,15v-6,20,-4,56,-4,82v0,29,43,1,56,2v48,-11,108,-25,154,-48v20,-10,32,-17,32,-25v0,-18,-33,-26,-99,-26xm195,-20v6,1,6,-2,5,-7v-3,2,-7,2,-5,7<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1653" class="blob-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">364</span></td>
      </tr>
      <tr>
        <td id="L1654" class="blob-num js-line-number" data-line-number="1654"></td>
        <td id="LC1654" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1655" class="blob-num js-line-number" data-line-number="1655"></td>
        <td id="LC1655" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>C<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1656" class="blob-num js-line-number" data-line-number="1656"></td>
        <td id="LC1656" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>51,-114v-12,75,96,76,166,71r145,-10v9,2,9,5,9,18v-37,18,-85,28,-109,22v-18,10,-47,10,-71,10v-29,0,-68,1,-105,-11v-6,-1,-10,-3,-10,-8v-33,-13,-48,-33,-66,-59v-19,-114,146,-150,224,-177v35,0,88,-31,99,7v-1,29,-49,14,-76,28v-55,8,-115,35,-175,71v-13,8,-23,21,-31,38<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1657" class="blob-num js-line-number" data-line-number="1657"></td>
        <td id="LC1657" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">376</span></td>
      </tr>
      <tr>
        <td id="L1658" class="blob-num js-line-number" data-line-number="1658"></td>
        <td id="LC1658" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1659" class="blob-num js-line-number" data-line-number="1659"></td>
        <td id="LC1659" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>D<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1660" class="blob-num js-line-number" data-line-number="1660"></td>
        <td id="LC1660" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>312,-78v-2,1,-3,7,-10,5v6,-3,10,-4,10,-5xm4,-252v2,-27,83,-38,106,-39v130,-7,267,1,291,109v0,0,-2,8,-3,25v-5,9,-4,28,-23,34v-4,4,-2,5,-7,0v-3,3,-15,7,-5,10v0,0,-10,14,-13,2v-11,1,-8,5,-20,14v1,2,7,3,9,1v-4,13,-22,13,-11,4v0,-3,1,-6,-3,-5v-40,29,-103,38,-141,65v10,6,22,-7,34,-3v-41,20,-127,44,-171,46v-21,1,-47,-33,-11,-39v15,-2,43,-6,56,-11v-16,-101,-5,-130,9,-207v2,0,4,-1,6,-3v-16,-17,-91,38,-103,-3xm297,-69v-7,3,-17,8,-25,7v1,1,3,2,5,2v-4,2,-11,5,-23,9v4,-11,30,-21,43,-18xm240,-51v10,0,12,2,0,6r0,-6xm220,-36v-1,-3,4,-6,6,-3v0,1,-2,1,-6,3xm125,-48v16,6,137,-46,155,-53v29,-18,101,-44,82,-93v-21,-53,-84,-61,-168,-67v-20,7,-50,3,-77,8v33,54,-12,132,8,205xm159,-22v-4,-1,-15,-5,-15,2v7,-1,12,-2,15,-2<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1661" class="blob-num js-line-number" data-line-number="1661"></td>
        <td id="LC1661" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">381</span></td>
      </tr>
      <tr>
        <td id="L1662" class="blob-num js-line-number" data-line-number="1662"></td>
        <td id="LC1662" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1663" class="blob-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>E<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1664" class="blob-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>45,-219v-19,-36,34,-41,63,-36v44,-10,133,-8,194,-15v3,2,38,11,52,15v-73,19,-171,21,-246,38v-9,11,-16,32,-20,61v35,11,133,-6,183,3v1,6,2,7,3,14v-46,24,-118,16,-193,27v-15,13,-22,52,-22,66v60,1,121,-20,188,-20v22,10,53,-7,74,5v16,29,-23,26,-43,32v-73,4,-139,13,-216,27r-52,-10v-4,-22,23,-69,26,-98v-3,0,-10,-15,-12,-24v20,-12,34,-23,35,-67v2,-1,5,-5,5,-7v0,-4,-14,-11,-19,-11<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1665" class="blob-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">353</span></td>
      </tr>
      <tr>
        <td id="L1666" class="blob-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1667" class="blob-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>F<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1668" class="blob-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>270,-258v13,2,59,6,48,34v-78,-3,-143,1,-212,22v-10,16,-21,43,-24,69r145,-9v8,3,29,-3,16,21v-14,-1,-59,13,-60,7v-12,13,-67,18,-108,21v-2,1,-4,3,-7,6v-2,23,-8,43,-7,69v1,28,-30,11,-40,5r10,-80r-26,-14v5,-10,10,-33,28,-25v21,-3,15,-46,26,-59v-1,-3,-32,-13,-28,-24v2,-22,45,-16,59,-30v47,4,99,-14,151,-9v5,-3,25,-3,29,-4<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1669" class="blob-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">236</span></td>
      </tr>
      <tr>
        <td id="L1670" class="blob-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1671" class="blob-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>G<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1672" class="blob-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>311,-168v53,0,94,57,74,110v-31,37,-71,34,-136,52v-13,-7,-41,10,-57,7v-73,-1,-122,-17,-162,-59v-49,-51,-24,-80,5,-130v35,-61,138,-93,214,-106v16,4,42,-1,40,21v-5,40,-39,2,-73,21v-76,19,-162,65,-177,142v28,103,237,76,312,29v2,-3,3,-7,3,-13v-10,-35,-37,-43,-87,-45v-16,-13,-53,-9,-78,1v-4,-3,-5,-7,-5,-11v17,-29,73,-17,108,-24v12,4,18,5,19,5<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1673" class="blob-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">391</span></td>
      </tr>
      <tr>
        <td id="L1674" class="blob-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1675" class="blob-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>H<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1676" class="blob-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>300,-268v18,12,19,32,4,51v-35,44,-34,140,-46,217v-1,5,-5,13,-11,12v-6,1,-19,-14,-18,-27r7,-106v-28,7,-76,22,-116,14v-18,2,-36,6,-55,3v-43,-8,-14,53,-33,75v-29,1,-26,-67,-21,-97v5,-31,28,-73,43,-98v2,2,7,3,14,3v13,33,-11,48,-13,78v61,4,118,2,176,2v8,0,13,-6,15,-20v4,-47,21,-87,54,-107<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1677" class="blob-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">288</span></td>
      </tr>
      <tr>
        <td id="L1678" class="blob-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1679" class="blob-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>I<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1680" class="blob-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>63,-266v34,10,-4,105,-8,128r-24,126v-2,2,-3,1,-9,6v-12,-10,-12,-15,-12,-47v0,-93,9,-156,28,-188v10,-17,19,-25,25,-25<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1681" class="blob-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">79</span></td>
      </tr>
      <tr>
        <td id="L1682" class="blob-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1683" class="blob-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>J<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1684" class="blob-num js-line-number" data-line-number="1684"></td>
        <td id="LC1684" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>235,-291v26,11,31,104,31,142v0,37,-2,95,-32,126v-33,34,-121,26,-167,1v-18,-11,-54,-29,-59,-59v0,-3,5,-15,16,-14v31,36,90,57,162,51v63,-30,56,-148,32,-226v-1,-16,11,-13,17,-21<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1685" class="blob-num js-line-number" data-line-number="1685"></td>
        <td id="LC1685" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">282</span></td>
      </tr>
      <tr>
        <td id="L1686" class="blob-num js-line-number" data-line-number="1686"></td>
        <td id="LC1686" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1687" class="blob-num js-line-number" data-line-number="1687"></td>
        <td id="LC1687" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>K<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1688" class="blob-num js-line-number" data-line-number="1688"></td>
        <td id="LC1688" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>212,-219v17,-5,80,-60,80,-19v0,9,-2,14,-5,16r-132,78v-34,23,-54,32,-21,50v39,21,74,23,124,41v5,2,7,5,7,9v-4,24,-55,15,-79,8v-67,-19,-98,-36,-116,-83v9,-24,38,-35,66,-61v7,-4,49,-30,76,-39xm47,-194v11,-20,11,-45,31,-55v2,2,4,3,6,0v29,39,-21,96,-18,128v-17,24,-15,62,-29,113v-4,3,-10,7,-19,11v-12,-13,-10,-28,-8,-53v3,-31,17,-79,37,-144<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1689" class="blob-num js-line-number" data-line-number="1689"></td>
        <td id="LC1689" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">270</span></td>
      </tr>
      <tr>
        <td id="L1690" class="blob-num js-line-number" data-line-number="1690"></td>
        <td id="LC1690" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1691" class="blob-num js-line-number" data-line-number="1691"></td>
        <td id="LC1691" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>L<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1692" class="blob-num js-line-number" data-line-number="1692"></td>
        <td id="LC1692" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>84,-43v58,0,179,-27,242,-4v3,17,-29,24,-40,26v-85,-4,-202,46,-268,3v-24,-16,-2,-33,-4,-57v26,-76,38,-108,86,-191v14,-7,26,-50,45,-32v6,22,5,31,-12,46v-20,39,-50,82,-67,142v-7,6,-19,46,-19,54v0,9,12,13,37,13<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1693" class="blob-num js-line-number" data-line-number="1693"></td>
        <td id="LC1693" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">331</span></td>
      </tr>
      <tr>
        <td id="L1694" class="blob-num js-line-number" data-line-number="1694"></td>
        <td id="LC1694" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1695" class="blob-num js-line-number" data-line-number="1695"></td>
        <td id="LC1695" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>M<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1696" class="blob-num js-line-number" data-line-number="1696"></td>
        <td id="LC1696" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>174,-236v-1,52,-11,92,-7,143v10,5,15,-12,22,-18v42,-55,90,-130,136,-174r15,-18v42,2,32,53,11,80v-12,58,-54,143,-34,210v0,3,-3,12,-9,10v-31,-5,-32,-57,-27,-92v4,-27,12,-58,25,-93v-5,-10,5,-19,6,-30v-46,44,-66,110,-129,172v-11,10,-18,15,-22,15v-34,6,-28,-103,-28,-152v-28,22,-65,119,-96,170v-9,15,-34,3,-31,-19v30,-64,91,-177,139,-229v12,-1,29,13,29,25<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1697" class="blob-num js-line-number" data-line-number="1697"></td>
        <td id="LC1697" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">343</span></td>
      </tr>
      <tr>
        <td id="L1698" class="blob-num js-line-number" data-line-number="1698"></td>
        <td id="LC1698" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1699" class="blob-num js-line-number" data-line-number="1699"></td>
        <td id="LC1699" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>N<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1700" class="blob-num js-line-number" data-line-number="1700"></td>
        <td id="LC1700" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>248,-20v-3,17,-37,18,-43,3v-24,-35,-53,-145,-80,-203v-32,40,-55,120,-92,174v-13,3,-26,-13,-27,-22r87,-171v4,-13,20,-57,42,-32v42,48,46,139,82,198v29,-45,46,-88,65,-153v12,-19,23,-42,38,-60v27,-1,14,18,4,44v-6,46,-32,68,-37,121v-15,29,-33,69,-39,101<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1701" class="blob-num js-line-number" data-line-number="1701"></td>
        <td id="LC1701" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">307</span></td>
      </tr>
      <tr>
        <td id="L1702" class="blob-num js-line-number" data-line-number="1702"></td>
        <td id="LC1702" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1703" class="blob-num js-line-number" data-line-number="1703"></td>
        <td id="LC1703" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>O<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1704" class="blob-num js-line-number" data-line-number="1704"></td>
        <td id="LC1704" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>240,-268v85,1,163,29,150,125v13,7,-12,18,-5,26v-23,63,-133,112,-228,124v-80,-16,-171,-56,-148,-153v11,-47,20,-43,53,-83v17,-9,39,-22,73,-29v45,-10,81,-10,105,-10xm363,-156v16,-51,-62,-85,-111,-79v-25,-11,-50,8,-81,0v-15,10,-70,16,-85,31v6,20,-27,24,-39,45v-42,75,40,128,115,128v56,0,209,-71,201,-125<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1705" class="blob-num js-line-number" data-line-number="1705"></td>
        <td id="LC1705" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">383</span></td>
      </tr>
      <tr>
        <td id="L1706" class="blob-num js-line-number" data-line-number="1706"></td>
        <td id="LC1706" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1707" class="blob-num js-line-number" data-line-number="1707"></td>
        <td id="LC1707" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>P<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1708" class="blob-num js-line-number" data-line-number="1708"></td>
        <td id="LC1708" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>70,-225v-7,-12,-36,16,-49,19v-4,0,-9,-5,-14,-17v21,-47,114,-55,172,-59v41,-3,132,33,99,87v-21,34,-72,59,-144,80v-2,16,-79,3,-74,46v3,25,-5,47,-10,68v-22,-1,-23,-29,-22,-56v2,-25,-20,-32,-8,-50v21,-5,10,-35,25,-57v6,-28,14,-48,25,-61xm71,-229v47,14,-2,50,-1,99v41,-3,113,-37,173,-76v5,-9,8,-14,8,-15v-28,-47,-125,-29,-180,-8<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1709" class="blob-num js-line-number" data-line-number="1709"></td>
        <td id="LC1709" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">252</span></td>
      </tr>
      <tr>
        <td id="L1710" class="blob-num js-line-number" data-line-number="1710"></td>
        <td id="LC1710" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1711" class="blob-num js-line-number" data-line-number="1711"></td>
        <td id="LC1711" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>Q<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1712" class="blob-num js-line-number" data-line-number="1712"></td>
        <td id="LC1712" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>374,-217v20,59,-11,127,-48,156r30,38v-1,6,-8,16,-14,9v-3,0,-19,-9,-47,-26v-72,35,-173,75,-236,12v-70,-40,-67,-213,26,-217r8,5v24,-20,72,-48,112,-38v21,-4,22,-1,50,-2v66,-2,94,20,119,63xm296,-88v13,5,61,-49,63,-84v4,-62,-54,-78,-119,-76v-14,-6,-49,5,-71,3v-42,16,-89,41,-93,94v-9,11,1,25,-7,38v-12,-19,-7,-67,-1,-88v-56,30,-37,137,19,155v27,17,92,19,119,0v12,-2,29,-9,52,-20v2,-2,3,-3,3,-6v-11,-12,-46,-27,-54,-56v0,-13,3,-19,9,-19v18,1,60,52,80,59<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1713" class="blob-num js-line-number" data-line-number="1713"></td>
        <td id="LC1713" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">379</span></td>
      </tr>
      <tr>
        <td id="L1714" class="blob-num js-line-number" data-line-number="1714"></td>
        <td id="LC1714" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1715" class="blob-num js-line-number" data-line-number="1715"></td>
        <td id="LC1715" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>R<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1716" class="blob-num js-line-number" data-line-number="1716"></td>
        <td id="LC1716" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>100,-275v96,-23,196,-10,208,78v-3,18,-17,52,-49,62v-14,20,-54,23,-79,40v-2,0,-14,2,-36,6v-40,8,-30,14,-3,33v37,27,52,30,118,55v16,6,31,23,12,27v-58,-2,-104,-29,-143,-61v-14,-3,-16,-15,-39,-27v-23,-19,-28,-12,-15,-38v63,-19,111,-15,163,-53v27,-20,43,-36,43,-49v0,-64,-120,-62,-173,-38v-9,4,-38,9,-40,18v-10,32,-16,70,-13,116v-10,21,-8,47,-6,75v2,31,-9,29,-27,22v-9,-55,5,-140,15,-190v-8,-6,-24,10,-24,-11v0,-34,16,-34,42,-55v2,-1,17,-4,46,-10<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1717" class="blob-num js-line-number" data-line-number="1717"></td>
        <td id="LC1717" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">297</span></td>
      </tr>
      <tr>
        <td id="L1718" class="blob-num js-line-number" data-line-number="1718"></td>
        <td id="LC1718" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1719" class="blob-num js-line-number" data-line-number="1719"></td>
        <td id="LC1719" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>S<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1720" class="blob-num js-line-number" data-line-number="1720"></td>
        <td id="LC1720" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>13,-3v-7,-3,-22,-18,-5,-22v68,-15,119,-32,154,-45v51,-19,39,-34,3,-53v-46,-25,-82,-30,-121,-64v-33,-29,-50,-35,-25,-58v37,-20,119,-29,181,-29v29,0,44,6,44,18v-9,26,-62,6,-104,14v-17,2,-72,6,-92,16v37,53,132,58,180,111v8,9,11,20,11,30v-4,17,-23,35,-42,34v-21,16,-17,1,-49,17v-14,7,-41,9,-56,20v-25,-3,-49,10,-79,11<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1721" class="blob-num js-line-number" data-line-number="1721"></td>
        <td id="LC1721" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">234</span></td>
      </tr>
      <tr>
        <td id="L1722" class="blob-num js-line-number" data-line-number="1722"></td>
        <td id="LC1722" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1723" class="blob-num js-line-number" data-line-number="1723"></td>
        <td id="LC1723" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>T<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1724" class="blob-num js-line-number" data-line-number="1724"></td>
        <td id="LC1724" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>141,-3v-36,-6,1,-49,-3,-79v10,-19,6,-35,15,-64r26,-85v-51,-9,-100,10,-141,14v-16,2,-30,-26,-11,-32v26,-8,143,-8,179,-19r12,6v67,-2,142,-1,200,-1v8,0,14,3,19,10v-18,16,-74,3,-103,14v-48,-4,-60,4,-113,7v-42,22,-36,130,-58,187v1,12,-9,44,-22,42<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1725" class="blob-num js-line-number" data-line-number="1725"></td>
        <td id="LC1725" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">277</span></td>
      </tr>
      <tr>
        <td id="L1726" class="blob-num js-line-number" data-line-number="1726"></td>
        <td id="LC1726" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1727" class="blob-num js-line-number" data-line-number="1727"></td>
        <td id="LC1727" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>U<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1728" class="blob-num js-line-number" data-line-number="1728"></td>
        <td id="LC1728" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>365,-262v13,56,-22,104,-36,141v-19,22,-30,38,-57,56v-4,18,-60,35,-78,50v-53,28,-142,0,-161,-34v-31,-56,-37,-108,-11,-164v17,-33,29,-50,48,-29v-2,2,-3,7,-4,13v-44,36,-38,149,7,174v30,26,55,19,102,4v56,-17,66,-34,120,-76v12,-24,56,-68,46,-122r0,-16v0,1,-1,3,-1,6v4,-13,11,-10,25,-3<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1729" class="blob-num js-line-number" data-line-number="1729"></td>
        <td id="LC1729" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">368</span></td>
      </tr>
      <tr>
        <td id="L1730" class="blob-num js-line-number" data-line-number="1730"></td>
        <td id="LC1730" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1731" class="blob-num js-line-number" data-line-number="1731"></td>
        <td id="LC1731" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>V<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1732" class="blob-num js-line-number" data-line-number="1732"></td>
        <td id="LC1732" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>246,-258v21,-22,31,-26,44,-8v1,1,-12,22,-28,35v-15,25,-41,38,-56,69v-13,15,-20,31,-28,57v-15,13,-11,29,-27,72v3,21,-5,24,-27,27v-33,-45,-54,-118,-84,-167v-5,-26,-18,-50,-25,-76v-3,-12,24,-8,29,-5v8,13,18,52,26,70r52,115v9,-2,4,-9,10,-21r25,-47v25,-44,46,-76,89,-121<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1733" class="blob-num js-line-number" data-line-number="1733"></td>
        <td id="LC1733" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">234</span></td>
      </tr>
      <tr>
        <td id="L1734" class="blob-num js-line-number" data-line-number="1734"></td>
        <td id="LC1734" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1735" class="blob-num js-line-number" data-line-number="1735"></td>
        <td id="LC1735" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>W<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1736" class="blob-num js-line-number" data-line-number="1736"></td>
        <td id="LC1736" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>31,-213v16,46,17,106,41,151v31,-35,49,-89,76,-127v30,-15,39,27,52,56v10,22,21,48,35,67v2,0,4,-1,5,-3v16,-28,50,-76,79,-121v14,-21,40,-63,64,-83r5,8v-30,58,-76,110,-97,173v-18,28,-25,37,-33,63v-11,1,-16,25,-30,15v-21,-31,-44,-89,-62,-131v0,-2,-1,-3,-5,-5v-17,11,-16,36,-31,50v-20,33,-20,84,-68,94v-24,-19,-23,-81,-39,-111v-1,-15,-29,-94,-10,-108v9,2,12,5,18,12<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1737" class="blob-num js-line-number" data-line-number="1737"></td>
        <td id="LC1737" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">331</span></td>
      </tr>
      <tr>
        <td id="L1738" class="blob-num js-line-number" data-line-number="1738"></td>
        <td id="LC1738" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1739" class="blob-num js-line-number" data-line-number="1739"></td>
        <td id="LC1739" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>X<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1740" class="blob-num js-line-number" data-line-number="1740"></td>
        <td id="LC1740" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>143,-183v43,-25,69,-36,126,-62v22,-10,86,-10,56,21v-51,3,-158,61,-154,64v10,15,41,30,50,52v27,17,46,60,70,82v9,14,-6,30,-24,20v-35,-43,-75,-100,-116,-132v-48,13,-100,47,-118,94v-1,49,-26,34,-27,4v-1,-26,13,-27,17,-48v22,-27,68,-55,90,-77v-9,-12,-60,-39,-79,-57v-6,-10,-6,-25,12,-25<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1741" class="blob-num js-line-number" data-line-number="1741"></td>
        <td id="LC1741" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">312</span></td>
      </tr>
      <tr>
        <td id="L1742" class="blob-num js-line-number" data-line-number="1742"></td>
        <td id="LC1742" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1743" class="blob-num js-line-number" data-line-number="1743"></td>
        <td id="LC1743" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>Y<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1744" class="blob-num js-line-number" data-line-number="1744"></td>
        <td id="LC1744" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>216,-240v19,-14,42,10,22,26v-54,66,-121,109,-156,197v-8,21,-11,15,-30,4v3,-37,27,-61,33,-76v12,-12,15,-19,32,-42v-8,-6,-40,5,-45,5v-48,-6,-69,-65,-56,-113v14,0,13,-1,24,7v2,33,12,75,42,73v36,-2,102,-57,134,-81<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1745" class="blob-num js-line-number" data-line-number="1745"></td>
        <td id="LC1745" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">189</span></td>
      </tr>
      <tr>
        <td id="L1746" class="blob-num js-line-number" data-line-number="1746"></td>
        <td id="LC1746" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1747" class="blob-num js-line-number" data-line-number="1747"></td>
        <td id="LC1747" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>Z<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1748" class="blob-num js-line-number" data-line-number="1748"></td>
        <td id="LC1748" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>60,-255v66,12,200,-34,240,21v-13,42,-63,62,-98,89v-19,15,-47,33,-82,55v-25,16,-47,32,-66,47v58,24,129,-6,208,-6v23,0,36,12,13,19v-33,2,-53,5,-86,10v-32,18,-88,15,-135,15v-9,-1,-55,-1,-48,-29v1,-24,30,-24,40,-41v64,-50,151,-86,208,-147v-38,-17,-155,12,-198,-4v0,0,-11,-33,4,-29<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1749" class="blob-num js-line-number" data-line-number="1749"></td>
        <td id="LC1749" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">310</span></td>
      </tr>
      <tr>
        <td id="L1750" class="blob-num js-line-number" data-line-number="1750"></td>
        <td id="LC1750" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1751" class="blob-num js-line-number" data-line-number="1751"></td>
        <td id="LC1751" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1752" class="blob-num js-line-number" data-line-number="1752"></td>
        <td id="LC1752" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>72,-258r-15,250v30,4,55,-3,80,-6v7,-1,8,17,9,23v-28,15,-73,23,-121,21v-7,0,-10,-6,-10,-17v0,-60,25,-193,22,-288v0,-16,13,-20,33,-19v9,-3,34,-12,51,-12v16,0,15,16,19,29v-16,7,-48,10,-68,19<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1753" class="blob-num js-line-number" data-line-number="1753"></td>
        <td id="LC1753" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">151</span></td>
      </tr>
      <tr>
        <td id="L1754" class="blob-num js-line-number" data-line-number="1754"></td>
        <td id="LC1754" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1755" class="blob-num js-line-number" data-line-number="1755"></td>
        <td id="LC1755" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1756" class="blob-num js-line-number" data-line-number="1756"></td>
        <td id="LC1756" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>236,38v20,-18,-8,-74,-13,-90v-44,-78,-112,-190,-200,-253v-2,0,-5,4,-7,12v-11,31,13,36,24,58v74,61,174,219,180,273r16,0<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1757" class="blob-num js-line-number" data-line-number="1757"></td>
        <td id="LC1757" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">257</span></td>
      </tr>
      <tr>
        <td id="L1758" class="blob-num js-line-number" data-line-number="1758"></td>
        <td id="LC1758" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1759" class="blob-num js-line-number" data-line-number="1759"></td>
        <td id="LC1759" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1760" class="blob-num js-line-number" data-line-number="1760"></td>
        <td id="LC1760" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>133,-258v-23,-13,-84,6,-85,-32v0,-10,5,-15,14,-15v0,0,30,2,90,7v10,1,15,13,15,36v2,7,-8,59,-13,112r-11,125v-9,48,9,90,-59,71v-20,-4,-39,-1,-59,-4v-5,-10,-25,-12,-14,-30v8,-3,61,-13,78,-8v14,1,8,-7,10,-17v15,-69,21,-166,34,-245<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1761" class="blob-num js-line-number" data-line-number="1761"></td>
        <td id="LC1761" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">171</span></td>
      </tr>
      <tr>
        <td id="L1762" class="blob-num js-line-number" data-line-number="1762"></td>
        <td id="LC1762" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1763" class="blob-num js-line-number" data-line-number="1763"></td>
        <td id="LC1763" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1764" class="blob-num js-line-number" data-line-number="1764"></td>
        <td id="LC1764" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>68,-306v20,15,47,36,58,60v-1,4,0,7,-9,7v-26,0,-47,-38,-49,-32v-15,9,-41,50,-54,30v-2,-31,17,-23,33,-51v8,-9,15,-14,21,-14<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1765" class="blob-num js-line-number" data-line-number="1765"></td>
        <td id="LC1765" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">135</span></td>
      </tr>
      <tr>
        <td id="L1766" class="blob-num js-line-number" data-line-number="1766"></td>
        <td id="LC1766" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1767" class="blob-num js-line-number" data-line-number="1767"></td>
        <td id="LC1767" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1768" class="blob-num js-line-number" data-line-number="1768"></td>
        <td id="LC1768" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>11,15v-8,33,18,45,50,34r205,2r197,-5v11,-5,14,-9,7,-28v-95,-21,-258,-10,-376,-10v-25,0,-72,-3,-83,7<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1769" class="blob-num js-line-number" data-line-number="1769"></td>
        <td id="LC1769" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">485</span></td>
      </tr>
      <tr>
        <td id="L1770" class="blob-num js-line-number" data-line-number="1770"></td>
        <td id="LC1770" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1771" class="blob-num js-line-number" data-line-number="1771"></td>
        <td id="LC1771" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>`<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1772" class="blob-num js-line-number" data-line-number="1772"></td>
        <td id="LC1772" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>75,-264v16,8,56,14,39,43v-30,-8,-65,-23,-105,-44v-1,-3,-3,-28,5,-25v16,5,44,17,61,26<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1773" class="blob-num js-line-number" data-line-number="1773"></td>
        <td id="LC1773" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">129</span></td>
      </tr>
      <tr>
        <td id="L1774" class="blob-num js-line-number" data-line-number="1774"></td>
        <td id="LC1774" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1775" class="blob-num js-line-number" data-line-number="1775"></td>
        <td id="LC1775" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>a<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1776" class="blob-num js-line-number" data-line-number="1776"></td>
        <td id="LC1776" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>124,-56v10,4,59,41,65,50v1,7,-6,17,-12,17r-60,-30v-22,2,-42,21,-65,19v-33,4,-68,-67,-15,-81v41,-27,96,-39,110,9v0,6,-4,12,-11,16v-33,-25,-67,-5,-88,12v10,16,61,-18,76,-12<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1777" class="blob-num js-line-number" data-line-number="1777"></td>
        <td id="LC1777" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">196</span></td>
      </tr>
      <tr>
        <td id="L1778" class="blob-num js-line-number" data-line-number="1778"></td>
        <td id="LC1778" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1779" class="blob-num js-line-number" data-line-number="1779"></td>
        <td id="LC1779" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>b<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1780" class="blob-num js-line-number" data-line-number="1780"></td>
        <td id="LC1780" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>80,-140v69,1,123,0,134,52v5,26,-71,71,-97,70v-11,11,-88,22,-94,22v-11,-3,-26,-18,-6,-24v19,-5,-2,-19,-1,-35v1,-18,11,-36,-5,-47v-6,-17,-6,-21,14,-32v6,-45,18,-89,28,-124v2,-7,8,-12,17,-15v5,3,10,11,16,28v-12,27,-13,63,-23,96v0,6,6,9,17,9xm87,-107v-40,-9,-31,31,-39,54v8,15,0,25,12,22v30,-8,60,-18,88,-32v39,-18,49,-33,-1,-42v-20,-4,-45,-7,-60,-2<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1781" class="blob-num js-line-number" data-line-number="1781"></td>
        <td id="LC1781" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">217</span></td>
      </tr>
      <tr>
        <td id="L1782" class="blob-num js-line-number" data-line-number="1782"></td>
        <td id="LC1782" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1783" class="blob-num js-line-number" data-line-number="1783"></td>
        <td id="LC1783" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>c<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1784" class="blob-num js-line-number" data-line-number="1784"></td>
        <td id="LC1784" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>128,-123v29,-7,37,29,12,33v-27,-4,-40,6,-79,25v-8,4,-13,11,-16,22v30,32,91,3,134,11v5,13,-8,26,-22,19v-51,25,-139,28,-150,-30v6,-50,69,-82,121,-80<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1785" class="blob-num js-line-number" data-line-number="1785"></td>
        <td id="LC1785" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">194</span></td>
      </tr>
      <tr>
        <td id="L1786" class="blob-num js-line-number" data-line-number="1786"></td>
        <td id="LC1786" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1787" class="blob-num js-line-number" data-line-number="1787"></td>
        <td id="LC1787" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1788" class="blob-num js-line-number" data-line-number="1788"></td>
        <td id="LC1788" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>224,-201v0,-35,-17,-111,24,-94v7,86,-2,119,0,197v-4,2,-8,21,-18,16v-62,-7,-154,-8,-185,29v6,17,28,26,51,26v16,0,100,-15,132,-18v7,5,-6,20,-10,22v-24,8,-122,42,-163,25v-32,-5,-62,-53,-36,-80v35,-37,118,-46,198,-43v1,-22,7,-49,7,-80<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1789" class="blob-num js-line-number" data-line-number="1789"></td>
        <td id="LC1789" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">265</span></td>
      </tr>
      <tr>
        <td id="L1790" class="blob-num js-line-number" data-line-number="1790"></td>
        <td id="LC1790" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1791" class="blob-num js-line-number" data-line-number="1791"></td>
        <td id="LC1791" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>e<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1792" class="blob-num js-line-number" data-line-number="1792"></td>
        <td id="LC1792" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>4,-57v0,-58,51,-71,110,-74v33,-1,45,16,59,35v1,14,2,39,-7,42v-24,-2,-73,13,-99,11v-2,2,-2,3,-2,3v0,3,12,8,37,15v21,0,69,9,31,22v-9,14,-34,6,-56,6v-27,-5,-73,-28,-73,-60xm123,-102v-22,2,-68,5,-65,26v24,-2,66,5,79,-6v-5,-13,-1,-13,-14,-20<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1793" class="blob-num js-line-number" data-line-number="1793"></td>
        <td id="LC1793" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">182</span></td>
      </tr>
      <tr>
        <td id="L1794" class="blob-num js-line-number" data-line-number="1794"></td>
        <td id="LC1794" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1795" class="blob-num js-line-number" data-line-number="1795"></td>
        <td id="LC1795" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>f<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1796" class="blob-num js-line-number" data-line-number="1796"></td>
        <td id="LC1796" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>6,-59v6,-29,53,-4,53,-43v0,-64,29,-118,84,-150v45,-25,167,-24,155,51v-1,2,-7,6,0,6r-10,2v-45,-58,-165,-39,-186,39v-7,26,-11,42,-9,62v44,8,95,-21,135,-7v-12,25,-39,21,-76,30v-19,5,-18,7,-54,19v-2,8,15,32,17,35v-6,25,-26,26,-40,-5r-15,-24v-41,10,-44,12,-54,-15<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1797" class="blob-num js-line-number" data-line-number="1797"></td>
        <td id="LC1797" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">234</span></td>
      </tr>
      <tr>
        <td id="L1798" class="blob-num js-line-number" data-line-number="1798"></td>
        <td id="LC1798" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1799" class="blob-num js-line-number" data-line-number="1799"></td>
        <td id="LC1799" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1800" class="blob-num js-line-number" data-line-number="1800"></td>
        <td id="LC1800" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>132,-97v30,27,21,75,30,117v-12,31,-11,66,-36,103v-32,46,-105,83,-167,39v-31,-21,-49,-29,-51,-75v-2,-37,77,-50,121,-57v37,-6,68,-10,95,-11v7,-6,3,-32,4,-46v0,0,-1,1,-1,2v0,-18,-5,-31,-14,-45v-44,5,-79,20,-94,-18v3,-54,73,-54,125,-50v12,7,12,13,4,25v-30,-11,-76,8,-90,20v23,3,50,-16,74,-4xm-34,121v60,53,168,1,159,-86v-47,-7,-93,24,-142,30v-12,7,-45,19,-42,29v0,10,8,19,25,27<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1801" class="blob-num js-line-number" data-line-number="1801"></td>
        <td id="LC1801" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">188</span></td>
      </tr>
      <tr>
        <td id="L1802" class="blob-num js-line-number" data-line-number="1802"></td>
        <td id="LC1802" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1803" class="blob-num js-line-number" data-line-number="1803"></td>
        <td id="LC1803" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>h<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1804" class="blob-num js-line-number" data-line-number="1804"></td>
        <td id="LC1804" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>100,-310v11,-2,10,19,11,20v-11,52,-40,133,-53,189v-6,30,-9,37,-9,47v27,0,113,-34,143,-34v42,0,31,47,39,79v0,4,-5,17,-16,16v4,2,11,3,4,6v-24,-1,-28,-34,-25,-64v-1,-1,-2,-3,-5,-5v-51,0,-110,38,-162,51v-9,1,-15,-15,-16,-23v17,-89,39,-141,71,-264v0,-9,6,-19,18,-18<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1805" class="blob-num js-line-number" data-line-number="1805"></td>
        <td id="LC1805" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">251</span></td>
      </tr>
      <tr>
        <td id="L1806" class="blob-num js-line-number" data-line-number="1806"></td>
        <td id="LC1806" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1807" class="blob-num js-line-number" data-line-number="1807"></td>
        <td id="LC1807" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1808" class="blob-num js-line-number" data-line-number="1808"></td>
        <td id="LC1808" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>62,-209v7,18,9,23,-5,38v-23,-6,-21,-18,-11,-36v2,0,8,-1,16,-2xm34,-7v-18,-21,-8,-73,-1,-106v7,-10,20,-8,23,6v-1,36,7,72,-2,104v-8,2,-8,0,-20,-4<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1809" class="blob-num js-line-number" data-line-number="1809"></td>
        <td id="LC1809" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">80</span></td>
      </tr>
      <tr>
        <td id="L1810" class="blob-num js-line-number" data-line-number="1810"></td>
        <td id="LC1810" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1811" class="blob-num js-line-number" data-line-number="1811"></td>
        <td id="LC1811" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>j<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1812" class="blob-num js-line-number" data-line-number="1812"></td>
        <td id="LC1812" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>88,-191v5,28,-18,40,-28,21v0,-20,12,-29,28,-21xm82,-99v28,-1,16,35,16,61v0,60,-19,150,-35,202v-12,8,-19,31,-35,16v-32,-7,-43,-19,-56,-44r2,-17v11,4,49,45,61,18v10,-55,27,-107,30,-171v0,-16,0,-59,17,-65<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1813" class="blob-num js-line-number" data-line-number="1813"></td>
        <td id="LC1813" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">120</span></td>
      </tr>
      <tr>
        <td id="L1814" class="blob-num js-line-number" data-line-number="1814"></td>
        <td id="LC1814" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1815" class="blob-num js-line-number" data-line-number="1815"></td>
        <td id="LC1815" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>k<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1816" class="blob-num js-line-number" data-line-number="1816"></td>
        <td id="LC1816" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>59,-66v33,26,114,37,155,62v8,-4,22,-2,19,-17v0,-4,-12,-11,-30,-24v-36,-25,-54,-22,-99,-33v14,-21,119,-13,103,-63r-16,-7r-123,47r25,-93v-3,-15,16,-49,18,-81v1,-15,-21,-14,-25,-3v-31,82,-49,168,-75,257v2,2,22,30,27,10v2,-5,4,-9,9,-11v4,-16,4,-15,12,-44<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1817" class="blob-num js-line-number" data-line-number="1817"></td>
        <td id="LC1817" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">236</span></td>
      </tr>
      <tr>
        <td id="L1818" class="blob-num js-line-number" data-line-number="1818"></td>
        <td id="LC1818" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1819" class="blob-num js-line-number" data-line-number="1819"></td>
        <td id="LC1819" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>l<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1820" class="blob-num js-line-number" data-line-number="1820"></td>
        <td id="LC1820" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>66,-300v21,-6,37,23,30,55v-10,51,-28,135,-28,208v0,11,6,36,-13,37v-29,-5,-30,-48,-25,-83r28,-177v-6,-17,1,-29,8,-40<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1821" class="blob-num js-line-number" data-line-number="1821"></td>
        <td id="LC1821" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">102</span></td>
      </tr>
      <tr>
        <td id="L1822" class="blob-num js-line-number" data-line-number="1822"></td>
        <td id="LC1822" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1823" class="blob-num js-line-number" data-line-number="1823"></td>
        <td id="LC1823" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>m<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1824" class="blob-num js-line-number" data-line-number="1824"></td>
        <td id="LC1824" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>348,-59v-2,21,0,57,3,73v-17,3,-30,-1,-32,-16v-8,-7,-5,-44,-13,-70v-35,3,-82,49,-111,70v-12,8,-40,4,-39,-15r2,-56v-1,-13,4,-28,-8,-29v-35,8,-79,72,-115,87v-6,2,-20,-18,-21,-22v1,-20,14,-105,39,-64r8,15v17,-14,72,-56,93,-54v27,3,49,40,43,80v24,-2,66,-55,124,-53v11,14,28,23,27,54<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1825" class="blob-num js-line-number" data-line-number="1825"></td>
        <td id="LC1825" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">368</span></td>
      </tr>
      <tr>
        <td id="L1826" class="blob-num js-line-number" data-line-number="1826"></td>
        <td id="LC1826" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1827" class="blob-num js-line-number" data-line-number="1827"></td>
        <td id="LC1827" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>n<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1828" class="blob-num js-line-number" data-line-number="1828"></td>
        <td id="LC1828" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>121,-136v37,6,62,54,62,111v0,32,-16,25,-31,17v-18,-30,-5,-45,-22,-85v-37,-13,-71,55,-92,65v-20,-3,-39,-39,-21,-62v2,-12,3,-15,11,-30v12,-8,20,11,29,12<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1829" class="blob-num js-line-number" data-line-number="1829"></td>
        <td id="LC1829" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">194</span></td>
      </tr>
      <tr>
        <td id="L1830" class="blob-num js-line-number" data-line-number="1830"></td>
        <td id="LC1830" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1831" class="blob-num js-line-number" data-line-number="1831"></td>
        <td id="LC1831" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>o<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1832" class="blob-num js-line-number" data-line-number="1832"></td>
        <td id="LC1832" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>108,-139v52,-24,104,18,104,63v0,59,-66,67,-114,83v-52,-2,-115,-50,-80,-105v23,-18,52,-35,90,-41xm45,-60v16,54,125,16,131,-23v-12,-59,-129,-8,-131,23<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1833" class="blob-num js-line-number" data-line-number="1833"></td>
        <td id="LC1833" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">217</span></td>
      </tr>
      <tr>
        <td id="L1834" class="blob-num js-line-number" data-line-number="1834"></td>
        <td id="LC1834" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1835" class="blob-num js-line-number" data-line-number="1835"></td>
        <td id="LC1835" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>p<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1836" class="blob-num js-line-number" data-line-number="1836"></td>
        <td id="LC1836" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>82,14v-10,12,-8,117,-24,142v-15,2,-19,0,-29,-13v0,-76,9,-113,22,-192v14,-27,35,-6,37,13v0,8,-3,21,-7,38v2,2,3,2,4,2v26,-9,116,-33,126,-72v-7,-17,-24,-33,-49,-31v-40,3,-116,13,-116,47v-5,7,-2,17,-16,20v-17,-12,-18,-20,-12,-38v8,-25,74,-61,110,-59v55,-15,113,15,118,70v-15,52,-84,79,-146,83v-5,0,-11,-4,-18,-10<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1837" class="blob-num js-line-number" data-line-number="1837"></td>
        <td id="LC1837" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">251</span></td>
      </tr>
      <tr>
        <td id="L1838" class="blob-num js-line-number" data-line-number="1838"></td>
        <td id="LC1838" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1839" class="blob-num js-line-number" data-line-number="1839"></td>
        <td id="LC1839" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>q<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1840" class="blob-num js-line-number" data-line-number="1840"></td>
        <td id="LC1840" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>144,-147v27,-8,89,-3,97,31v-9,29,-42,-4,-73,1v-32,6,-118,20,-111,49v0,7,13,13,21,13v21,0,78,-24,104,-34v2,0,9,8,22,21v1,1,1,2,1,5v-27,90,-22,70,-43,203v11,15,-15,54,-33,33v-6,-8,-10,-20,-3,-28v1,-72,5,-114,15,-172v-35,3,-35,10,-59,8v-41,-4,-98,-41,-56,-85v33,-34,59,-27,118,-45<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1841" class="blob-num js-line-number" data-line-number="1841"></td>
        <td id="LC1841" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">248</span></td>
      </tr>
      <tr>
        <td id="L1842" class="blob-num js-line-number" data-line-number="1842"></td>
        <td id="LC1842" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1843" class="blob-num js-line-number" data-line-number="1843"></td>
        <td id="LC1843" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1844" class="blob-num js-line-number" data-line-number="1844"></td>
        <td id="LC1844" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>242,-117v2,22,5,10,-14,23v-73,-7,-166,-23,-174,56v-8,6,-3,20,-8,36v-29,10,-40,-9,-33,-46v6,-31,7,-69,32,-55v58,-37,66,-42,175,-19v3,5,15,4,22,5<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1845" class="blob-num js-line-number" data-line-number="1845"></td>
        <td id="LC1845" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">229</span></td>
      </tr>
      <tr>
        <td id="L1846" class="blob-num js-line-number" data-line-number="1846"></td>
        <td id="LC1846" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1847" class="blob-num js-line-number" data-line-number="1847"></td>
        <td id="LC1847" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>s<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1848" class="blob-num js-line-number" data-line-number="1848"></td>
        <td id="LC1848" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>154,-151v19,1,27,24,13,32v-4,1,-22,4,-53,7v-16,8,-22,-2,-39,9v23,21,89,16,96,62v-13,24,-85,35,-124,42v-9,-3,-18,-3,-27,0v-6,-4,-21,-16,-8,-25v30,-6,83,-13,102,-24v-17,-16,-80,-33,-97,-48v-3,-2,-4,-7,-4,-15v-6,-6,3,-13,15,-18v22,-9,94,-23,126,-22<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1849" class="blob-num js-line-number" data-line-number="1849"></td>
        <td id="LC1849" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">188</span></td>
      </tr>
      <tr>
        <td id="L1850" class="blob-num js-line-number" data-line-number="1850"></td>
        <td id="LC1850" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1851" class="blob-num js-line-number" data-line-number="1851"></td>
        <td id="LC1851" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>t<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1852" class="blob-num js-line-number" data-line-number="1852"></td>
        <td id="LC1852" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>85,-150v10,-41,35,-126,65,-134v4,1,24,19,11,36v-17,22,-29,57,-36,104v26,8,50,-7,73,5v14,0,22,3,22,9v-1,19,-44,18,-57,23v-10,1,-46,0,-54,10v-10,24,-4,67,-20,98v-21,-3,-26,1,-26,-20v0,-9,2,-36,8,-81v-15,-13,-81,9,-77,-27v4,-38,71,6,91,-23<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1853" class="blob-num js-line-number" data-line-number="1853"></td>
        <td id="LC1853" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">194</span></td>
      </tr>
      <tr>
        <td id="L1854" class="blob-num js-line-number" data-line-number="1854"></td>
        <td id="LC1854" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1855" class="blob-num js-line-number" data-line-number="1855"></td>
        <td id="LC1855" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>u<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1856" class="blob-num js-line-number" data-line-number="1856"></td>
        <td id="LC1856" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>207,-136v-1,-2,11,-14,14,-13v6,0,10,7,10,22v-3,40,-23,56,-40,82v-13,19,-62,43,-93,43v-67,-2,-111,-75,-71,-133v26,-3,21,29,19,49v-1,27,26,44,57,42v41,-2,93,-55,104,-92<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1857" class="blob-num js-line-number" data-line-number="1857"></td>
        <td id="LC1857" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">242</span></td>
      </tr>
      <tr>
        <td id="L1858" class="blob-num js-line-number" data-line-number="1858"></td>
        <td id="LC1858" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1859" class="blob-num js-line-number" data-line-number="1859"></td>
        <td id="LC1859" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>v<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1860" class="blob-num js-line-number" data-line-number="1860"></td>
        <td id="LC1860" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>24,-127r52,71v42,-16,70,-54,124,-65v5,4,8,7,8,11v-8,19,-4,8,-33,32v0,1,-1,3,-1,5v-61,45,-93,68,-97,68v-40,-15,-50,-72,-68,-100v6,-14,10,-22,15,-22<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1861" class="blob-num js-line-number" data-line-number="1861"></td>
        <td id="LC1861" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">214</span></td>
      </tr>
      <tr>
        <td id="L1862" class="blob-num js-line-number" data-line-number="1862"></td>
        <td id="LC1862" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1863" class="blob-num js-line-number" data-line-number="1863"></td>
        <td id="LC1863" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1864" class="blob-num js-line-number" data-line-number="1864"></td>
        <td id="LC1864" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>15,-139v38,-2,27,57,45,86v30,2,67,-66,101,-78v26,6,36,69,60,78v47,-35,51,-54,119,-104v3,0,7,-2,15,-4v19,23,-9,28,-21,49v-33,28,-68,90,-107,109v-10,6,-52,-47,-72,-71v-20,17,-85,74,-97,73v-38,7,-41,-98,-52,-122v0,-1,3,-7,9,-16<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1865" class="blob-num js-line-number" data-line-number="1865"></td>
        <td id="LC1865" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">325</span></td>
      </tr>
      <tr>
        <td id="L1866" class="blob-num js-line-number" data-line-number="1866"></td>
        <td id="LC1866" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1867" class="blob-num js-line-number" data-line-number="1867"></td>
        <td id="LC1867" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1868" class="blob-num js-line-number" data-line-number="1868"></td>
        <td id="LC1868" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>95,-124v22,-13,78,-32,99,-31v16,0,23,6,23,18v0,22,-17,11,-49,21v-3,0,-45,20,-42,24v0,1,2,4,8,10v20,24,49,41,44,80v-35,3,-27,-9,-60,-44v-40,-43,-37,-26,-79,9v-1,1,-2,3,-3,8v-12,8,-28,10,-27,-11v-6,-8,45,-65,48,-65v-17,-21,-61,-52,-24,-68v9,0,48,37,62,49<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1869" class="blob-num js-line-number" data-line-number="1869"></td>
        <td id="LC1869" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">223</span></td>
      </tr>
      <tr>
        <td id="L1870" class="blob-num js-line-number" data-line-number="1870"></td>
        <td id="LC1870" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1871" class="blob-num js-line-number" data-line-number="1871"></td>
        <td id="LC1871" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>y<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1872" class="blob-num js-line-number" data-line-number="1872"></td>
        <td id="LC1872" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>44,-65v22,33,70,4,99,-8v5,-4,28,-15,41,-31r17,0v25,47,-26,70,-40,114v-5,4,-9,8,-10,21v-16,12,-11,33,-27,51v-5,18,-12,43,-23,71v-1,-1,-2,34,-18,29v-12,1,-22,-12,-22,-23v20,-70,24,-65,68,-177v-47,16,-111,8,-116,-39v-11,-13,-7,-62,8,-62v18,0,22,26,23,54<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1873" class="blob-num js-line-number" data-line-number="1873"></td>
        <td id="LC1873" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">216</span></td>
      </tr>
      <tr>
        <td id="L1874" class="blob-num js-line-number" data-line-number="1874"></td>
        <td id="LC1874" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1875" class="blob-num js-line-number" data-line-number="1875"></td>
        <td id="LC1875" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>z<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1876" class="blob-num js-line-number" data-line-number="1876"></td>
        <td id="LC1876" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>189,-43v9,-1,46,-6,41,12v0,7,-5,13,-15,14v-45,6,-148,24,-181,13v0,-3,-5,-8,-14,-15v5,-44,66,-46,90,-85v-15,-18,-84,21,-84,-14v0,-10,5,-17,14,-18v33,-3,79,-13,109,-3v4,-2,14,11,12,15v0,23,-26,51,-78,84v28,10,73,-3,106,-3<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1877" class="blob-num js-line-number" data-line-number="1877"></td>
        <td id="LC1877" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">244</span></td>
      </tr>
      <tr>
        <td id="L1878" class="blob-num js-line-number" data-line-number="1878"></td>
        <td id="LC1878" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1879" class="blob-num js-line-number" data-line-number="1879"></td>
        <td id="LC1879" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>{<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1880" class="blob-num js-line-number" data-line-number="1880"></td>
        <td id="LC1880" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>94,-303v27,-9,90,-14,79,26v-20,17,-55,-5,-87,13v-4,1,-6,4,-6,8v33,42,31,44,7,85v-6,10,-13,16,-13,13v5,6,17,17,15,31r-33,78v7,35,28,49,57,63r49,0v7,42,-51,41,-86,20v-43,-13,-51,-51,-56,-89v-2,-25,25,-54,27,-71v-3,-4,-46,-5,-41,-21v2,-10,-3,-29,11,-25v2,0,51,-17,52,-38v4,-3,-25,-23,-25,-49v0,-41,8,-30,50,-44<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1881" class="blob-num js-line-number" data-line-number="1881"></td>
        <td id="LC1881" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">179</span></td>
      </tr>
      <tr>
        <td id="L1882" class="blob-num js-line-number" data-line-number="1882"></td>
        <td id="LC1882" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1883" class="blob-num js-line-number" data-line-number="1883"></td>
        <td id="LC1883" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1884" class="blob-num js-line-number" data-line-number="1884"></td>
        <td id="LC1884" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>30,-308v26,5,14,50,15,80v5,78,-8,153,-3,225v-2,15,-1,31,-11,36v-8,-3,-25,-22,-25,-32r9,-183v0,-40,0,-78,1,-112v0,-4,9,-15,14,-14<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1885" class="blob-num js-line-number" data-line-number="1885"></td>
        <td id="LC1885" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">63</span></td>
      </tr>
      <tr>
        <td id="L1886" class="blob-num js-line-number" data-line-number="1886"></td>
        <td id="LC1886" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1887" class="blob-num js-line-number" data-line-number="1887"></td>
        <td id="LC1887" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>}<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1888" class="blob-num js-line-number" data-line-number="1888"></td>
        <td id="LC1888" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>47,-298v34,-17,118,-18,112,36v6,25,-76,98,-69,103v4,16,39,7,44,28v7,34,-34,17,-37,39v8,29,49,83,23,123v-15,23,-43,26,-73,46v-34,8,-43,11,-49,-17v1,-15,30,-15,33,-20v24,-12,70,-27,55,-61v-14,-33,-37,-68,-19,-103v-46,-50,46,-100,60,-141v-10,-16,-68,6,-77,-12<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1889" class="blob-num js-line-number" data-line-number="1889"></td>
        <td id="LC1889" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">143</span></td>
      </tr>
      <tr>
        <td id="L1890" class="blob-num js-line-number" data-line-number="1890"></td>
        <td id="LC1890" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1891" class="blob-num js-line-number" data-line-number="1891"></td>
        <td id="LC1891" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>~<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1892" class="blob-num js-line-number" data-line-number="1892"></td>
        <td id="LC1892" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>7,-254v2,-6,59,-50,67,-46v11,-1,35,19,46,26v5,0,27,-10,66,-31v21,8,-1,25,-7,38v-27,21,-48,31,-65,31v-24,-11,-37,-39,-65,-9v-7,7,-26,36,-42,11v3,-5,-3,-17,0,-20<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1893" class="blob-num js-line-number" data-line-number="1893"></td>
        <td id="LC1893" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">199</span></td>
      </tr>
      <tr>
        <td id="L1894" class="blob-num js-line-number" data-line-number="1894"></td>
        <td id="LC1894" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1895" class="blob-num js-line-number" data-line-number="1895"></td>
        <td id="LC1895" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00a0</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1896" class="blob-num js-line-number" data-line-number="1896"></td>
        <td id="LC1896" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">179</span></td>
      </tr>
      <tr>
        <td id="L1897" class="blob-num js-line-number" data-line-number="1897"></td>
        <td id="LC1897" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1898" class="blob-num js-line-number" data-line-number="1898"></td>
        <td id="LC1898" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00a1</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1899" class="blob-num js-line-number" data-line-number="1899"></td>
        <td id="LC1899" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>86,-197v8,16,-7,41,-24,25v-11,-11,-4,-16,-3,-29v13,0,15,-2,27,4xm46,-107v4,-8,11,-16,23,-7v19,26,-5,57,-6,87v-7,0,-5,18,-9,28v0,14,-17,52,-11,70v-2,7,-15,28,-25,12v-4,-6,-15,-7,-6,-16v2,-39,14,-96,34,-174<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1900" class="blob-num js-line-number" data-line-number="1900"></td>
        <td id="LC1900" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">95</span></td>
      </tr>
      <tr>
        <td id="L1901" class="blob-num js-line-number" data-line-number="1901"></td>
        <td id="LC1901" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1902" class="blob-num js-line-number" data-line-number="1902"></td>
        <td id="LC1902" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00a2</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1903" class="blob-num js-line-number" data-line-number="1903"></td>
        <td id="LC1903" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>105,-188v13,-12,14,-18,26,-15v7,23,7,15,-3,49v6,0,18,14,17,20v-3,5,-12,19,-26,13v-14,1,-14,5,-16,21v10,10,46,-13,38,18v-9,17,-23,16,-54,20v-17,16,-4,55,-29,60v-37,-10,19,-64,-24,-71v-20,-10,-37,-47,-6,-62v23,-20,73,-4,77,-53xm65,-101v4,-9,7,-8,3,-13v-14,4,-22,10,-3,13<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1904" class="blob-num js-line-number" data-line-number="1904"></td>
        <td id="LC1904" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">154</span></td>
      </tr>
      <tr>
        <td id="L1905" class="blob-num js-line-number" data-line-number="1905"></td>
        <td id="LC1905" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1906" class="blob-num js-line-number" data-line-number="1906"></td>
        <td id="LC1906" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00a3</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1907" class="blob-num js-line-number" data-line-number="1907"></td>
        <td id="LC1907" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>153,-170v3,22,62,0,49,39v-18,6,-31,12,-58,9v-12,-1,-17,30,-23,39v19,26,50,56,91,35v9,-2,27,-13,27,4v0,27,-27,39,-58,42v-32,-5,-59,-19,-78,-39v-6,1,-35,44,-57,39v-25,0,-37,-15,-37,-46v0,-41,43,-53,73,-50v4,1,12,-18,12,-21v-7,-15,-49,0,-44,-30v-2,-31,31,-16,60,-19v16,-30,25,-119,93,-113v16,2,75,16,50,44v-4,5,-7,7,-12,8v-18,-12,-32,-18,-41,-18v-35,-1,-38,52,-47,77xm43,-45v4,5,12,-2,11,-9v-1,2,-12,1,-11,9<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1908" class="blob-num js-line-number" data-line-number="1908"></td>
        <td id="LC1908" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">242</span></td>
      </tr>
      <tr>
        <td id="L1909" class="blob-num js-line-number" data-line-number="1909"></td>
        <td id="LC1909" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1910" class="blob-num js-line-number" data-line-number="1910"></td>
        <td id="LC1910" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00a4</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1911" class="blob-num js-line-number" data-line-number="1911"></td>
        <td id="LC1911" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>308,-133r-200,16v-2,1,-6,4,-10,10v70,-2,144,-14,211,-8v3,0,8,4,13,8v-1,4,-3,9,-9,17v-57,11,-164,6,-219,25v26,32,112,25,173,25v9,0,35,2,35,19v0,9,-4,13,-12,14v-115,12,-146,23,-211,-19v-12,-4,-22,-9,-25,-27v-6,-29,-61,3,-43,-49v17,-1,36,7,42,-12v-32,7,-36,-39,-11,-40v29,14,63,-25,73,-30v52,-25,72,-44,142,-44v23,0,21,41,-1,39v-35,-3,-61,9,-102,31v2,2,5,4,8,4v18,-6,101,-9,115,-9v7,0,55,13,31,30<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1912" class="blob-num js-line-number" data-line-number="1912"></td>
        <td id="LC1912" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">312</span></td>
      </tr>
      <tr>
        <td id="L1913" class="blob-num js-line-number" data-line-number="1913"></td>
        <td id="LC1913" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1914" class="blob-num js-line-number" data-line-number="1914"></td>
        <td id="LC1914" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u20ac</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1915" class="blob-num js-line-number" data-line-number="1915"></td>
        <td id="LC1915" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>308,-133r-200,16v-2,1,-6,4,-10,10v70,-2,144,-14,211,-8v3,0,8,4,13,8v-1,4,-3,9,-9,17v-57,11,-164,6,-219,25v26,32,112,25,173,25v9,0,35,2,35,19v0,9,-4,13,-12,14v-115,12,-146,23,-211,-19v-12,-4,-22,-9,-25,-27v-6,-29,-61,3,-43,-49v17,-1,36,7,42,-12v-32,7,-36,-39,-11,-40v29,14,63,-25,73,-30v52,-25,72,-44,142,-44v23,0,21,41,-1,39v-35,-3,-61,9,-102,31v2,2,5,4,8,4v18,-6,101,-9,115,-9v7,0,55,13,31,30<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1916" class="blob-num js-line-number" data-line-number="1916"></td>
        <td id="LC1916" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">312</span></td>
      </tr>
      <tr>
        <td id="L1917" class="blob-num js-line-number" data-line-number="1917"></td>
        <td id="LC1917" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1918" class="blob-num js-line-number" data-line-number="1918"></td>
        <td id="LC1918" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00a5</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1919" class="blob-num js-line-number" data-line-number="1919"></td>
        <td id="LC1919" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>31,-248v30,-3,64,64,74,59v37,-22,77,-65,107,-82v20,-11,34,18,21,32v-28,19,-52,38,-70,57v-18,8,-40,21,-35,60v2,19,39,7,64,7v25,0,16,21,2,27v-36,16,-46,8,-68,18v6,11,101,-20,66,24v-21,11,-42,12,-75,20v-2,1,-5,6,-10,18v-8,3,-11,10,-24,8v-7,-17,-2,-18,-9,-26v-13,5,-39,3,-53,-2v-10,-17,-7,-27,0,-34v23,-1,45,1,64,-5v-11,-7,-28,-4,-64,-6v-13,-8,-15,-24,-6,-35v33,-2,102,9,76,-37v-14,-14,-33,-38,-60,-66v-10,-10,-8,-28,0,-37<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1920" class="blob-num js-line-number" data-line-number="1920"></td>
        <td id="LC1920" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">219</span></td>
      </tr>
      <tr>
        <td id="L1921" class="blob-num js-line-number" data-line-number="1921"></td>
        <td id="LC1921" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1922" class="blob-num js-line-number" data-line-number="1922"></td>
        <td id="LC1922" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00a7</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1923" class="blob-num js-line-number" data-line-number="1923"></td>
        <td id="LC1923" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>141,-115v12,10,29,36,28,56v-4,68,-129,69,-152,16v-1,-12,-10,-22,8,-23v17,3,47,21,67,23v16,1,40,-8,38,-21v-8,-49,-119,-30,-117,-85v1,-28,15,-45,-3,-64v-1,-53,55,-61,103,-62v15,-5,6,-5,20,-2v16,17,23,27,23,30v-1,26,-29,7,-45,7v-21,0,-51,2,-62,17v19,14,87,8,97,43v18,14,16,57,-5,65xm64,-147r57,17v10,-28,-22,-43,-47,-44v-25,-1,-35,19,-10,27<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1924" class="blob-num js-line-number" data-line-number="1924"></td>
        <td id="LC1924" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">174</span></td>
      </tr>
      <tr>
        <td id="L1925" class="blob-num js-line-number" data-line-number="1925"></td>
        <td id="LC1925" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1926" class="blob-num js-line-number" data-line-number="1926"></td>
        <td id="LC1926" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00a8</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1927" class="blob-num js-line-number" data-line-number="1927"></td>
        <td id="LC1927" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>124,-259v0,9,-4,13,-12,13v-18,0,-22,-21,-17,-35v19,-1,30,1,29,22xm23,-285v7,2,30,9,29,18v1,10,-9,19,-18,19v-19,0,-28,-26,-11,-37<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1928" class="blob-num js-line-number" data-line-number="1928"></td>
        <td id="LC1928" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">136</span></td>
      </tr>
      <tr>
        <td id="L1929" class="blob-num js-line-number" data-line-number="1929"></td>
        <td id="LC1929" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1930" class="blob-num js-line-number" data-line-number="1930"></td>
        <td id="LC1930" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00a9</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1931" class="blob-num js-line-number" data-line-number="1931"></td>
        <td id="LC1931" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>102,-29v-74,5,-124,-84,-70,-140v22,-22,53,-35,97,-38v46,-4,88,49,74,100v0,44,-51,75,-101,78xm96,-66v42,-3,75,-23,75,-69v0,-23,-4,-38,-44,-38v-16,0,-33,6,-49,20v36,-4,55,-12,62,20v-5,16,-49,1,-50,21v10,15,53,-14,54,11v0,18,-14,27,-42,27v-22,1,-46,-11,-46,-31v0,-25,7,-39,20,-44v-1,-1,-2,-2,-3,-2v-51,22,-32,89,23,85<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1932" class="blob-num js-line-number" data-line-number="1932"></td>
        <td id="LC1932" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">217</span></td>
      </tr>
      <tr>
        <td id="L1933" class="blob-num js-line-number" data-line-number="1933"></td>
        <td id="LC1933" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1934" class="blob-num js-line-number" data-line-number="1934"></td>
        <td id="LC1934" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00aa</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1935" class="blob-num js-line-number" data-line-number="1935"></td>
        <td id="LC1935" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>6,-265v1,-31,58,-53,80,-22v-11,14,25,28,25,36v-2,8,-15,12,-27,10v-22,-29,-68,19,-78,-24xm52,-281v-8,1,-24,10,-9,13v11,1,24,-10,9,-13<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1936" class="blob-num js-line-number" data-line-number="1936"></td>
        <td id="LC1936" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">117</span></td>
      </tr>
      <tr>
        <td id="L1937" class="blob-num js-line-number" data-line-number="1937"></td>
        <td id="LC1937" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1938" class="blob-num js-line-number" data-line-number="1938"></td>
        <td id="LC1938" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00ab</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1939" class="blob-num js-line-number" data-line-number="1939"></td>
        <td id="LC1939" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>191,-64v16,6,87,37,53,63v-39,-9,-71,-28,-107,-40v-14,-13,-13,-34,10,-47v27,-15,48,-55,84,-62v9,-2,21,10,21,18r-13,21v-16,5,-44,22,-51,41v0,4,1,6,3,6xm71,-65v17,6,87,35,55,62v-39,-8,-66,-27,-108,-40v-14,-13,-13,-36,10,-46v23,-18,50,-56,84,-63v9,-2,21,10,21,18r-13,22v-20,6,-32,17,-51,37v0,3,-1,11,2,10<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1940" class="blob-num js-line-number" data-line-number="1940"></td>
        <td id="LC1940" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">265</span></td>
      </tr>
      <tr>
        <td id="L1941" class="blob-num js-line-number" data-line-number="1941"></td>
        <td id="LC1941" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1942" class="blob-num js-line-number" data-line-number="1942"></td>
        <td id="LC1942" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00ac</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1943" class="blob-num js-line-number" data-line-number="1943"></td>
        <td id="LC1943" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>141,-99v47,7,103,-3,149,6v14,24,18,15,10,39v-10,34,-7,31,-26,76v-4,6,-15,8,-16,21v-4,2,-4,1,-13,5v-22,-33,-4,-33,16,-104v-5,-9,-28,-4,-38,-6r-183,4v-14,0,-41,-29,-17,-36v31,-9,82,5,118,-5<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1944" class="blob-num js-line-number" data-line-number="1944"></td>
        <td id="LC1944" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">315</span></td>
      </tr>
      <tr>
        <td id="L1945" class="blob-num js-line-number" data-line-number="1945"></td>
        <td id="LC1945" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1946" class="blob-num js-line-number" data-line-number="1946"></td>
        <td id="LC1946" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00ae</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1947" class="blob-num js-line-number" data-line-number="1947"></td>
        <td id="LC1947" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>75,-194v78,-29,116,9,130,84v-2,42,-22,47,-57,67v-74,20,-161,-19,-129,-110v6,-18,29,-34,57,-40xm46,-86v51,36,84,21,129,-15v7,-15,0,-39,-10,-49v-13,-37,-49,-26,-86,-18v-28,7,-49,46,-33,82xm72,-123v-5,-43,68,-57,75,-14v-17,26,-18,17,3,32v2,25,-25,18,-45,7r-4,-4v-1,8,-3,20,-12,24v-10,-3,-21,-34,-17,-45xm112,-135v-10,-1,-20,13,-9,14v6,-6,9,-11,9,-14<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1948" class="blob-num js-line-number" data-line-number="1948"></td>
        <td id="LC1948" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">217</span></td>
      </tr>
      <tr>
        <td id="L1949" class="blob-num js-line-number" data-line-number="1949"></td>
        <td id="LC1949" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1950" class="blob-num js-line-number" data-line-number="1950"></td>
        <td id="LC1950" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00af</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1951" class="blob-num js-line-number" data-line-number="1951"></td>
        <td id="LC1951" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>63,-295v28,-7,73,10,105,7v11,1,6,8,5,19v-37,21,-72,11,-136,11v-23,0,-31,-14,-27,-36v12,-15,40,0,53,-1<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1952" class="blob-num js-line-number" data-line-number="1952"></td>
        <td id="LC1952" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">183</span></td>
      </tr>
      <tr>
        <td id="L1953" class="blob-num js-line-number" data-line-number="1953"></td>
        <td id="LC1953" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1954" class="blob-num js-line-number" data-line-number="1954"></td>
        <td id="LC1954" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00b0</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1955" class="blob-num js-line-number" data-line-number="1955"></td>
        <td id="LC1955" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>106,-268v0,36,-35,38,-51,46v-48,5,-60,-58,-25,-78v33,-11,76,-9,76,32xm38,-257v16,7,39,2,38,-17v-13,-9,-28,-1,-32,11v-5,3,-7,0,-6,6<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1956" class="blob-num js-line-number" data-line-number="1956"></td>
        <td id="LC1956" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">114</span></td>
      </tr>
      <tr>
        <td id="L1957" class="blob-num js-line-number" data-line-number="1957"></td>
        <td id="LC1957" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1958" class="blob-num js-line-number" data-line-number="1958"></td>
        <td id="LC1958" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00b1</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1959" class="blob-num js-line-number" data-line-number="1959"></td>
        <td id="LC1959" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>93,-163v-7,46,76,-4,46,47v-14,6,-27,13,-38,8v-24,2,-14,28,-28,44r-14,0v-7,-12,-5,-15,-7,-33v-12,-7,-41,-1,-37,-24v2,-11,23,-17,36,-14r28,-38v4,0,9,4,14,10xm113,-27v-12,18,-58,27,-85,24v-16,2,-22,-23,-13,-36v28,-7,85,-11,98,12<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1960" class="blob-num js-line-number" data-line-number="1960"></td>
        <td id="LC1960" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">151</span></td>
      </tr>
      <tr>
        <td id="L1961" class="blob-num js-line-number" data-line-number="1961"></td>
        <td id="LC1961" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1962" class="blob-num js-line-number" data-line-number="1962"></td>
        <td id="LC1962" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00b4</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1963" class="blob-num js-line-number" data-line-number="1963"></td>
        <td id="LC1963" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>52,-284v29,-11,50,-34,62,-14v3,12,-86,54,-94,56v-14,0,-16,-12,-12,-23v11,-5,25,-11,44,-19<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1964" class="blob-num js-line-number" data-line-number="1964"></td>
        <td id="LC1964" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">120</span></td>
      </tr>
      <tr>
        <td id="L1965" class="blob-num js-line-number" data-line-number="1965"></td>
        <td id="LC1965" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1966" class="blob-num js-line-number" data-line-number="1966"></td>
        <td id="LC1966" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00b6</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1967" class="blob-num js-line-number" data-line-number="1967"></td>
        <td id="LC1967" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>121,-237v21,-9,44,-13,63,-1v-1,7,5,6,7,11r-4,190v-2,33,4,39,-15,40v-16,1,-10,-20,-10,-33r4,-161v0,-17,-1,-34,-16,-25v2,10,1,23,1,35v-9,46,-6,75,-15,156v-3,4,-7,5,-12,5v-17,-10,-3,-89,-10,-115v-43,14,-98,10,-101,-29v-4,-53,59,-63,104,-75v3,1,4,2,4,2xm95,-204v2,9,-30,50,1,50v35,0,23,-13,29,-43v0,-1,-2,-7,-4,-15v-12,-1,-14,2,-26,8<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1968" class="blob-num js-line-number" data-line-number="1968"></td>
        <td id="LC1968" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">206</span></td>
      </tr>
      <tr>
        <td id="L1969" class="blob-num js-line-number" data-line-number="1969"></td>
        <td id="LC1969" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1970" class="blob-num js-line-number" data-line-number="1970"></td>
        <td id="LC1970" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00b8</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1971" class="blob-num js-line-number" data-line-number="1971"></td>
        <td id="LC1971" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>74,16v32,2,49,14,55,36v-3,7,-14,31,-29,33v-28,4,-57,11,-88,14v-19,-6,-13,-31,8,-33v20,-1,59,-5,73,-14v-17,-14,-68,8,-53,-37v9,-10,2,-28,24,-30v8,8,13,17,10,31<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1972" class="blob-num js-line-number" data-line-number="1972"></td>
        <td id="LC1972" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">129</span></td>
      </tr>
      <tr>
        <td id="L1973" class="blob-num js-line-number" data-line-number="1973"></td>
        <td id="LC1973" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1974" class="blob-num js-line-number" data-line-number="1974"></td>
        <td id="LC1974" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00ba</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1975" class="blob-num js-line-number" data-line-number="1975"></td>
        <td id="LC1975" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>13,-273v1,-31,56,-41,83,-18v36,8,14,48,-9,52v-35,6,-64,-5,-74,-34xm81,-269v-7,-7,-20,-11,-29,-6v5,13,13,11,29,6<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1976" class="blob-num js-line-number" data-line-number="1976"></td>
        <td id="LC1976" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">128</span></td>
      </tr>
      <tr>
        <td id="L1977" class="blob-num js-line-number" data-line-number="1977"></td>
        <td id="LC1977" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1978" class="blob-num js-line-number" data-line-number="1978"></td>
        <td id="LC1978" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00bb</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1979" class="blob-num js-line-number" data-line-number="1979"></td>
        <td id="LC1979" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>120,-129v9,-33,48,-10,64,5v9,20,86,52,50,86v-36,11,-66,31,-107,40v-6,-7,-9,-13,-9,-17v-2,-13,50,-46,63,-46v11,-18,-33,-42,-48,-47xm1,-128v10,-33,46,-8,64,6v8,19,86,50,51,85v-40,13,-69,30,-108,40v-6,-7,-8,-12,-8,-16v-2,-14,50,-46,63,-47v7,-13,-9,-20,-19,-30v-10,-9,-20,-15,-30,-17<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1980" class="blob-num js-line-number" data-line-number="1980"></td>
        <td id="LC1980" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">252</span></td>
      </tr>
      <tr>
        <td id="L1981" class="blob-num js-line-number" data-line-number="1981"></td>
        <td id="LC1981" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1982" class="blob-num js-line-number" data-line-number="1982"></td>
        <td id="LC1982" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00bf</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1983" class="blob-num js-line-number" data-line-number="1983"></td>
        <td id="LC1983" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>181,-247v3,1,31,2,29,15v-4,22,-37,27,-41,4v1,-5,7,-20,12,-19xm161,-34v-45,-1,-105,19,-124,51v0,11,18,17,54,17v39,0,82,-13,112,4v-10,35,-58,31,-100,31v-47,0,-80,-10,-99,-31v-10,-56,22,-73,64,-90v8,-3,32,-9,74,-18v21,-15,7,-62,22,-92v-1,-5,-1,-11,4,-12v16,0,24,7,24,22v-8,30,-8,73,-17,111v-3,5,-7,7,-14,7<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1984" class="blob-num js-line-number" data-line-number="1984"></td>
        <td id="LC1984" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">213</span></td>
      </tr>
      <tr>
        <td id="L1985" class="blob-num js-line-number" data-line-number="1985"></td>
        <td id="LC1985" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1986" class="blob-num js-line-number" data-line-number="1986"></td>
        <td id="LC1986" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00c0</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1987" class="blob-num js-line-number" data-line-number="1987"></td>
        <td id="LC1987" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm150,-268v14,10,54,14,37,41v-28,-7,-62,-22,-100,-42v-2,-3,-2,-26,5,-23v16,4,42,17,58,24<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1988" class="blob-num js-line-number" data-line-number="1988"></td>
        <td id="LC1988" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1989" class="blob-num js-line-number" data-line-number="1989"></td>
        <td id="LC1989" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00c1</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1990" class="blob-num js-line-number" data-line-number="1990"></td>
        <td id="LC1990" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm84,-250v31,-5,83,-53,100,-31v0,5,-11,15,-35,28v-16,5,-51,28,-53,25v-14,1,-16,-11,-12,-22<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1991" class="blob-num js-line-number" data-line-number="1991"></td>
        <td id="LC1991" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1992" class="blob-num js-line-number" data-line-number="1992"></td>
        <td id="LC1992" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00c2</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1993" class="blob-num js-line-number" data-line-number="1993"></td>
        <td id="LC1993" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm202,-219v-27,-6,-40,-26,-61,-37v-21,7,-39,46,-65,23v-2,-4,-3,-10,-4,-14v19,-4,43,-32,61,-43v27,6,40,22,62,37v12,8,18,17,18,25v0,6,-3,9,-11,9<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1994" class="blob-num js-line-number" data-line-number="1994"></td>
        <td id="LC1994" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1995" class="blob-num js-line-number" data-line-number="1995"></td>
        <td id="LC1995" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00c3</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1996" class="blob-num js-line-number" data-line-number="1996"></td>
        <td id="LC1996" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm100,-285v26,-19,54,19,69,22v4,0,15,-5,34,-13v23,-9,22,-17,31,-12v3,11,-9,9,-7,21v-26,20,-46,30,-59,30v-3,3,-50,-26,-49,-29v-12,1,-31,35,-51,32v-3,-8,-5,-14,-5,-18v10,-9,16,-17,37,-33<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1997" class="blob-num js-line-number" data-line-number="1997"></td>
        <td id="LC1997" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L1998" class="blob-num js-line-number" data-line-number="1998"></td>
        <td id="LC1998" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00c4</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1999" class="blob-num js-line-number" data-line-number="1999"></td>
        <td id="LC1999" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm187,-259v0,8,-4,13,-12,13v-18,0,-21,-20,-16,-34v18,-1,28,2,28,21xm90,-284v7,3,28,11,28,18v0,9,-9,18,-18,17v-17,0,-25,-24,-10,-35<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L2000" class="blob-num js-line-number" data-line-number="2000"></td>
        <td id="LC2000" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2001" class="blob-num js-line-number" data-line-number="2001"></td>
        <td id="LC2001" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00c5</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2002" class="blob-num js-line-number" data-line-number="2002"></td>
        <td id="LC2002" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm112,-239v-31,-17,-9,-61,29,-56v12,2,22,3,33,12v24,39,-30,62,-62,44xm119,-262v2,14,41,8,41,-4v0,-4,-8,-6,-24,-9v-10,-2,-17,10,-17,13<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L2003" class="blob-num js-line-number" data-line-number="2003"></td>
        <td id="LC2003" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2004" class="blob-num js-line-number" data-line-number="2004"></td>
        <td id="LC2004" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00c6</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2005" class="blob-num js-line-number" data-line-number="2005"></td>
        <td id="LC2005" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>335,-259v0,30,-102,12,-122,34v10,21,2,79,16,100v24,-6,59,-13,86,-16v23,-2,32,21,13,26r-103,29v-3,22,-4,38,8,43v28,-5,60,-6,86,-14v5,-1,14,7,14,11v6,16,-90,40,-107,40v-29,0,-39,-19,-32,-46v-2,-4,0,-26,-9,-28v-29,2,-58,6,-88,6v-31,0,-40,74,-82,73v-18,-23,4,-37,12,-50v40,-65,112,-126,165,-207v20,-17,69,-11,112,-13v21,0,31,4,31,12xm123,-111v28,1,44,-2,67,-10v-4,-22,5,-49,-7,-65v-3,6,-65,61,-60,75<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2006" class="blob-num js-line-number" data-line-number="2006"></td>
        <td id="LC2006" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">348</span></td>
      </tr>
      <tr>
        <td id="L2007" class="blob-num js-line-number" data-line-number="2007"></td>
        <td id="LC2007" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2008" class="blob-num js-line-number" data-line-number="2008"></td>
        <td id="LC2008" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00c7</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2009" class="blob-num js-line-number" data-line-number="2009"></td>
        <td id="LC2009" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>48,-108v-12,70,90,71,159,67r138,-9v9,-1,7,9,7,17v-37,16,-80,27,-103,21v-14,9,-40,3,-67,9v-30,0,-64,1,-100,-10v-6,-1,-10,-4,-10,-8v-32,-12,-46,-31,-63,-56v-16,-61,47,-103,83,-121v82,-42,118,-45,200,-60v21,-4,36,34,11,37v-90,11,-148,31,-225,77v-12,8,-23,20,-30,36xm172,18v29,4,47,14,53,35v-2,7,-14,31,-27,31v-28,7,-55,9,-84,14v-18,-5,-13,-32,7,-32v21,0,55,-5,69,-13v-16,-14,-63,10,-50,-35v9,-10,1,-27,23,-29v7,8,11,16,9,29<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2010" class="blob-num js-line-number" data-line-number="2010"></td>
        <td id="LC2010" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">331</span></td>
      </tr>
      <tr>
        <td id="L2011" class="blob-num js-line-number" data-line-number="2011"></td>
        <td id="LC2011" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2012" class="blob-num js-line-number" data-line-number="2012"></td>
        <td id="LC2012" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00c8</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2013" class="blob-num js-line-number" data-line-number="2013"></td>
        <td id="LC2013" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>49,-160v1,-4,-10,-9,-15,-8v-15,-35,32,-30,57,-31r142,-8v2,1,30,7,40,10v-52,16,-133,17,-190,30v-7,9,-12,24,-15,47v26,10,102,-6,141,3v1,3,1,6,2,10v-36,18,-92,12,-149,21v-11,9,-16,41,-16,51v55,-1,111,-21,168,-13v15,-8,48,1,31,18v-53,16,-130,13,-198,29r-39,-8v-4,-19,17,-53,20,-76v-1,0,-7,-11,-9,-18v18,-7,22,-28,30,-57xm184,-236v6,9,5,13,0,23v-28,-7,-62,-21,-100,-41v-3,-2,-3,-27,5,-23v34,11,60,25,95,41<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2014" class="blob-num js-line-number" data-line-number="2014"></td>
        <td id="LC2014" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">252</span></td>
      </tr>
      <tr>
        <td id="L2015" class="blob-num js-line-number" data-line-number="2015"></td>
        <td id="LC2015" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2016" class="blob-num js-line-number" data-line-number="2016"></td>
        <td id="LC2016" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00c9</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2017" class="blob-num js-line-number" data-line-number="2017"></td>
        <td id="LC2017" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>49,-160v1,-4,-10,-9,-15,-8v-15,-35,32,-30,57,-31r142,-8v2,1,30,7,40,10v-52,16,-133,17,-190,30v-7,9,-12,24,-15,47v26,10,102,-6,141,3v1,3,1,6,2,10v-36,18,-92,12,-149,21v-11,9,-16,41,-16,51v55,-1,111,-21,168,-13v15,-8,48,1,31,18v-53,16,-130,13,-198,29r-39,-8v-4,-19,17,-53,20,-76v-1,0,-7,-11,-9,-18v18,-7,22,-28,30,-57xm133,-248v27,-11,48,-32,59,-14v3,11,-79,52,-88,53v-14,1,-16,-11,-12,-21v10,-4,23,-11,41,-18<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2018" class="blob-num js-line-number" data-line-number="2018"></td>
        <td id="LC2018" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">252</span></td>
      </tr>
      <tr>
        <td id="L2019" class="blob-num js-line-number" data-line-number="2019"></td>
        <td id="LC2019" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2020" class="blob-num js-line-number" data-line-number="2020"></td>
        <td id="LC2020" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00ca</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2021" class="blob-num js-line-number" data-line-number="2021"></td>
        <td id="LC2021" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>49,-160v1,-4,-10,-9,-15,-8v-15,-35,32,-30,57,-31r142,-8v2,1,30,7,40,10v-52,16,-133,17,-190,30v-7,9,-12,24,-15,47v26,10,102,-6,141,3v1,3,1,6,2,10v-36,18,-92,12,-149,21v-11,9,-16,41,-16,51v55,-1,111,-21,168,-13v15,-8,48,1,31,18v-53,16,-130,13,-198,29r-39,-8v-4,-19,17,-53,20,-76v-1,0,-7,-11,-9,-18v18,-7,22,-28,30,-57xm199,-211v-27,-6,-39,-26,-60,-37v-21,7,-40,47,-65,22v-2,-7,-2,-7,-4,-13v18,-5,44,-31,61,-43v27,6,41,22,62,37v12,9,18,17,18,25v0,6,-4,9,-12,9<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2022" class="blob-num js-line-number" data-line-number="2022"></td>
        <td id="LC2022" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">252</span></td>
      </tr>
      <tr>
        <td id="L2023" class="blob-num js-line-number" data-line-number="2023"></td>
        <td id="LC2023" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2024" class="blob-num js-line-number" data-line-number="2024"></td>
        <td id="LC2024" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00cb</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2025" class="blob-num js-line-number" data-line-number="2025"></td>
        <td id="LC2025" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>49,-160v1,-4,-10,-9,-15,-8v-15,-35,32,-30,57,-31r142,-8v2,1,30,7,40,10v-52,16,-133,17,-190,30v-7,9,-12,24,-15,47v26,10,102,-6,141,3v1,3,1,6,2,10v-36,18,-92,12,-149,21v-11,9,-17,41,-17,51v55,0,112,-21,169,-13v15,-8,48,1,31,18v-53,16,-130,13,-198,29r-39,-8v-3,-21,17,-53,20,-76v-1,0,-7,-11,-9,-18v18,-7,22,-28,30,-57xm191,-236v0,8,-4,13,-12,13v-17,0,-19,-19,-16,-34v18,-1,29,1,28,21xm95,-261v7,3,29,9,28,18v0,7,-9,17,-18,17v-18,0,-26,-25,-10,-35<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2026" class="blob-num js-line-number" data-line-number="2026"></td>
        <td id="LC2026" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">252</span></td>
      </tr>
      <tr>
        <td id="L2027" class="blob-num js-line-number" data-line-number="2027"></td>
        <td id="LC2027" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2028" class="blob-num js-line-number" data-line-number="2028"></td>
        <td id="LC2028" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00cc</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2029" class="blob-num js-line-number" data-line-number="2029"></td>
        <td id="LC2029" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>33,-5v-9,-6,-9,-12,-9,-36v0,-71,8,-119,22,-144v8,-13,14,-20,19,-20v27,20,-11,87,-10,120r-15,76v-1,1,-4,2,-7,4xm72,-247v7,6,55,15,36,40v-28,-7,-61,-21,-99,-41v-3,-2,-3,-27,5,-23v18,3,41,17,58,24<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2030" class="blob-num js-line-number" data-line-number="2030"></td>
        <td id="LC2030" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">111</span></td>
      </tr>
      <tr>
        <td id="L2031" class="blob-num js-line-number" data-line-number="2031"></td>
        <td id="LC2031" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2032" class="blob-num js-line-number" data-line-number="2032"></td>
        <td id="LC2032" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00cd</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2033" class="blob-num js-line-number" data-line-number="2033"></td>
        <td id="LC2033" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>26,-5v-9,-6,-9,-12,-9,-36v0,-71,7,-119,21,-144v8,-13,14,-20,19,-20v28,19,-7,89,-10,120v-2,21,-8,47,-14,76v-2,1,-2,0,-7,4xm6,-233v31,-6,83,-53,101,-31v2,11,-80,53,-89,53v-14,1,-14,-11,-12,-22<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2034" class="blob-num js-line-number" data-line-number="2034"></td>
        <td id="LC2034" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">104</span></td>
      </tr>
      <tr>
        <td id="L2035" class="blob-num js-line-number" data-line-number="2035"></td>
        <td id="LC2035" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2036" class="blob-num js-line-number" data-line-number="2036"></td>
        <td id="LC2036" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00ce</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2037" class="blob-num js-line-number" data-line-number="2037"></td>
        <td id="LC2037" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>53,-9v-15,7,-16,-3,-16,-32v0,-71,7,-119,21,-144v8,-13,14,-20,19,-20v28,19,-7,89,-10,120v-2,21,-8,47,-14,76xm137,-209v-27,-6,-40,-26,-61,-37v-8,0,-9,4,-13,10v-11,13,-50,37,-56,0v18,-5,43,-32,61,-43v28,5,40,21,62,36v12,9,18,17,18,25v0,6,-4,9,-11,9<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2038" class="blob-num js-line-number" data-line-number="2038"></td>
        <td id="LC2038" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">144</span></td>
      </tr>
      <tr>
        <td id="L2039" class="blob-num js-line-number" data-line-number="2039"></td>
        <td id="LC2039" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2040" class="blob-num js-line-number" data-line-number="2040"></td>
        <td id="LC2040" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00cf</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2041" class="blob-num js-line-number" data-line-number="2041"></td>
        <td id="LC2041" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>33,-5v-9,-6,-9,-12,-9,-36v0,-71,8,-119,22,-144v8,-13,14,-20,19,-20v27,20,-11,87,-10,120r-15,76v-1,1,-4,2,-7,4xm111,-222v0,8,-4,12,-12,12v-18,0,-19,-19,-16,-33v18,-1,29,1,28,21xm15,-247v8,2,29,9,28,17v0,21,-37,24,-36,1v0,-7,2,-13,8,-18<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2042" class="blob-num js-line-number" data-line-number="2042"></td>
        <td id="LC2042" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">110</span></td>
      </tr>
      <tr>
        <td id="L2043" class="blob-num js-line-number" data-line-number="2043"></td>
        <td id="LC2043" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2044" class="blob-num js-line-number" data-line-number="2044"></td>
        <td id="LC2044" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00d1</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2045" class="blob-num js-line-number" data-line-number="2045"></td>
        <td id="LC2045" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>224,-182v1,-17,15,-24,22,-38v20,0,13,10,3,33v-3,36,-25,52,-28,94v-10,24,-30,55,-29,82r-19,7v-32,-8,-36,-70,-58,-111v-2,-23,-7,-27,-19,-54v-28,36,-41,93,-71,133v-9,5,-20,-9,-20,-17r73,-149v9,-24,31,-5,36,7v19,41,31,98,53,139v22,-35,34,-69,50,-118v2,-3,3,-3,7,-8xm203,-257v22,-8,41,-24,65,-26v3,11,-8,9,-7,21v-26,20,-46,31,-59,31v-2,3,-49,-27,-49,-29v-11,0,-32,31,-46,32v-11,-2,-12,-21,-4,-23v4,-6,28,-30,48,-34v17,-4,43,28,52,28<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2046" class="blob-num js-line-number" data-line-number="2046"></td>
        <td id="LC2046" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">219</span></td>
      </tr>
      <tr>
        <td id="L2047" class="blob-num js-line-number" data-line-number="2047"></td>
        <td id="LC2047" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2048" class="blob-num js-line-number" data-line-number="2048"></td>
        <td id="LC2048" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00d2</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2049" class="blob-num js-line-number" data-line-number="2049"></td>
        <td id="LC2049" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm161,-262v14,10,52,13,37,41v-28,-7,-62,-21,-100,-41v-3,-3,-3,-26,5,-24v16,5,42,17,58,24<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2050" class="blob-num js-line-number" data-line-number="2050"></td>
        <td id="LC2050" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">273</span></td>
      </tr>
      <tr>
        <td id="L2051" class="blob-num js-line-number" data-line-number="2051"></td>
        <td id="LC2051" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2052" class="blob-num js-line-number" data-line-number="2052"></td>
        <td id="LC2052" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00d3</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2053" class="blob-num js-line-number" data-line-number="2053"></td>
        <td id="LC2053" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm142,-250v27,-11,47,-32,59,-14v2,11,-80,53,-89,53v-13,1,-15,-11,-12,-21v10,-5,24,-11,42,-18<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2054" class="blob-num js-line-number" data-line-number="2054"></td>
        <td id="LC2054" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">273</span></td>
      </tr>
      <tr>
        <td id="L2055" class="blob-num js-line-number" data-line-number="2055"></td>
        <td id="LC2055" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2056" class="blob-num js-line-number" data-line-number="2056"></td>
        <td id="LC2056" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00d4</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2057" class="blob-num js-line-number" data-line-number="2057"></td>
        <td id="LC2057" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm157,-282v17,18,52,34,54,63v-24,12,-52,-36,-53,-29r-42,34v-23,-4,-6,-31,5,-34v1,1,27,-37,36,-34<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2058" class="blob-num js-line-number" data-line-number="2058"></td>
        <td id="LC2058" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">273</span></td>
      </tr>
      <tr>
        <td id="L2059" class="blob-num js-line-number" data-line-number="2059"></td>
        <td id="LC2059" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2060" class="blob-num js-line-number" data-line-number="2060"></td>
        <td id="LC2060" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00d5</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2061" class="blob-num js-line-number" data-line-number="2061"></td>
        <td id="LC2061" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm116,-270v26,-19,54,19,69,22v4,0,15,-5,34,-13v23,-10,22,-16,31,-12v3,11,-8,9,-7,21v-45,28,-47,42,-88,16v-29,-19,-12,-20,-43,2v-8,5,-12,18,-23,15v-13,-3,-12,-20,-4,-23v4,-6,14,-15,31,-28<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2062" class="blob-num js-line-number" data-line-number="2062"></td>
        <td id="LC2062" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">273</span></td>
      </tr>
      <tr>
        <td id="L2063" class="blob-num js-line-number" data-line-number="2063"></td>
        <td id="LC2063" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2064" class="blob-num js-line-number" data-line-number="2064"></td>
        <td id="LC2064" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00d6</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2065" class="blob-num js-line-number" data-line-number="2065"></td>
        <td id="LC2065" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm197,-229v0,8,-4,13,-12,13v-17,0,-19,-19,-16,-34v18,-1,29,1,28,21xm101,-254v7,3,28,9,27,18v1,8,-8,17,-17,17v-18,0,-26,-24,-10,-35<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2066" class="blob-num js-line-number" data-line-number="2066"></td>
        <td id="LC2066" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">273</span></td>
      </tr>
      <tr>
        <td id="L2067" class="blob-num js-line-number" data-line-number="2067"></td>
        <td id="LC2067" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2068" class="blob-num js-line-number" data-line-number="2068"></td>
        <td id="LC2068" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00d8</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2069" class="blob-num js-line-number" data-line-number="2069"></td>
        <td id="LC2069" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>76,-211v41,-13,100,-22,140,-3v26,-19,40,-29,44,-29v10,0,15,7,15,20v0,15,-23,23,-30,35v23,39,29,114,-21,139v-36,19,-102,35,-147,18v-14,-5,-29,29,-46,35v-25,-13,-19,-24,3,-56v-9,-17,-28,-27,-28,-60v0,-38,23,-72,70,-99xm107,-66v55,15,125,-12,123,-70v0,-16,-5,-25,-13,-29r-110,95r0,4xm39,-108v-1,3,17,31,22,27v8,-6,109,-90,123,-106v-15,-11,-43,1,-63,2v-33,10,-80,35,-82,77<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2070" class="blob-num js-line-number" data-line-number="2070"></td>
        <td id="LC2070" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">270</span></td>
      </tr>
      <tr>
        <td id="L2071" class="blob-num js-line-number" data-line-number="2071"></td>
        <td id="LC2071" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2072" class="blob-num js-line-number" data-line-number="2072"></td>
        <td id="LC2072" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00d9</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2073" class="blob-num js-line-number" data-line-number="2073"></td>
        <td id="LC2073" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>281,-202v6,67,-30,121,-71,152v-3,14,-47,26,-60,39v-41,20,-110,1,-125,-26v-24,-44,-28,-84,-8,-127v12,-26,23,-38,37,-22v-2,2,-3,5,-3,10v-34,26,-30,116,5,134v22,32,86,-1,109,-8v38,-28,104,-64,97,-149v2,-10,7,-8,19,-3xm151,-243v14,10,54,14,37,41v-28,-7,-61,-22,-99,-42v-3,-2,-4,-25,4,-23v16,5,42,17,58,24<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2074" class="blob-num js-line-number" data-line-number="2074"></td>
        <td id="LC2074" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">262</span></td>
      </tr>
      <tr>
        <td id="L2075" class="blob-num js-line-number" data-line-number="2075"></td>
        <td id="LC2075" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2076" class="blob-num js-line-number" data-line-number="2076"></td>
        <td id="LC2076" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00da</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2077" class="blob-num js-line-number" data-line-number="2077"></td>
        <td id="LC2077" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>281,-202v6,67,-30,121,-71,152v-3,14,-47,26,-60,39v-41,20,-110,1,-125,-26v-24,-44,-28,-84,-8,-127v12,-26,23,-38,37,-22v-2,2,-3,5,-3,10v-34,26,-30,116,5,134v22,32,86,-1,109,-8v38,-28,104,-64,97,-149v2,-10,7,-8,19,-3xm194,-265v3,-1,11,4,11,6v3,12,-81,52,-89,54v-14,0,-13,-9,-12,-22<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2078" class="blob-num js-line-number" data-line-number="2078"></td>
        <td id="LC2078" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">262</span></td>
      </tr>
      <tr>
        <td id="L2079" class="blob-num js-line-number" data-line-number="2079"></td>
        <td id="LC2079" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2080" class="blob-num js-line-number" data-line-number="2080"></td>
        <td id="LC2080" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00db</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2081" class="blob-num js-line-number" data-line-number="2081"></td>
        <td id="LC2081" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>281,-202v6,67,-30,121,-71,152v-3,14,-47,26,-60,39v-41,20,-110,1,-125,-26v-24,-44,-28,-84,-8,-127v12,-26,23,-38,37,-22v-2,2,-3,5,-3,10v-34,26,-30,116,5,134v22,32,86,-1,109,-8v38,-28,104,-64,97,-149v2,-10,7,-8,19,-3xm150,-266v24,11,58,27,73,46v0,5,-3,6,-10,6v-28,2,-61,-30,-63,-25v-10,0,-57,40,-69,23v3,-10,-8,-15,8,-19v17,-1,34,-29,61,-31<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2082" class="blob-num js-line-number" data-line-number="2082"></td>
        <td id="LC2082" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">262</span></td>
      </tr>
      <tr>
        <td id="L2083" class="blob-num js-line-number" data-line-number="2083"></td>
        <td id="LC2083" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2084" class="blob-num js-line-number" data-line-number="2084"></td>
        <td id="LC2084" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00dc</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2085" class="blob-num js-line-number" data-line-number="2085"></td>
        <td id="LC2085" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>281,-202v6,67,-30,121,-71,152v-3,14,-47,26,-60,39v-41,20,-110,1,-125,-26v-24,-44,-28,-84,-8,-127v12,-26,23,-38,37,-22v-2,2,-3,5,-3,10v-34,26,-29,116,5,134v22,32,86,-1,109,-8v38,-28,104,-64,97,-149v2,-10,7,-8,19,-3xm197,-227v0,8,-4,13,-12,13v-18,0,-21,-20,-16,-34v18,-1,28,2,28,21xm101,-252v7,3,27,10,27,18v0,8,-9,18,-18,17v-18,-1,-24,-25,-9,-35<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2086" class="blob-num js-line-number" data-line-number="2086"></td>
        <td id="LC2086" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">262</span></td>
      </tr>
      <tr>
        <td id="L2087" class="blob-num js-line-number" data-line-number="2087"></td>
        <td id="LC2087" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2088" class="blob-num js-line-number" data-line-number="2088"></td>
        <td id="LC2088" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00df</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2089" class="blob-num js-line-number" data-line-number="2089"></td>
        <td id="LC2089" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>33,10v-29,4,-28,-32,-16,-70v18,-58,17,-137,56,-176v12,-24,46,-58,82,-43v20,8,47,24,47,54v0,30,-62,59,-67,90v33,23,56,33,63,63v-18,21,-22,36,-48,54v-24,17,-27,41,-53,16v-2,-19,7,-35,24,-42v15,-13,26,-22,34,-40v-13,-17,-78,-29,-56,-70v-3,-27,64,-54,66,-86v-8,-25,-41,-4,-52,8v-29,30,-47,83,-51,141v-17,25,-8,71,-29,101<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L2090" class="blob-num js-line-number" data-line-number="2090"></td>
        <td id="LC2090" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2091" class="blob-num js-line-number" data-line-number="2091"></td>
        <td id="LC2091" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00e0</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2092" class="blob-num js-line-number" data-line-number="2092"></td>
        <td id="LC2092" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm99,-137v7,6,56,14,37,40v-28,-7,-62,-21,-100,-41v-2,-3,-2,-26,5,-23v16,4,42,17,58,24<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2093" class="blob-num js-line-number" data-line-number="2093"></td>
        <td id="LC2093" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">173</span></td>
      </tr>
      <tr>
        <td id="L2094" class="blob-num js-line-number" data-line-number="2094"></td>
        <td id="LC2094" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2095" class="blob-num js-line-number" data-line-number="2095"></td>
        <td id="LC2095" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00e1</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2096" class="blob-num js-line-number" data-line-number="2096"></td>
        <td id="LC2096" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm32,-117v24,-3,85,-55,101,-32v3,11,-80,53,-89,53v-13,2,-14,-10,-12,-21<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2097" class="blob-num js-line-number" data-line-number="2097"></td>
        <td id="LC2097" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">173</span></td>
      </tr>
      <tr>
        <td id="L2098" class="blob-num js-line-number" data-line-number="2098"></td>
        <td id="LC2098" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2099" class="blob-num js-line-number" data-line-number="2099"></td>
        <td id="LC2099" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00e2</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2100" class="blob-num js-line-number" data-line-number="2100"></td>
        <td id="LC2100" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm147,-97v-27,-6,-39,-26,-60,-37v-21,7,-38,46,-65,23v-2,-5,-3,-10,-4,-14v18,-4,43,-31,61,-42v28,5,40,21,62,36v12,8,18,17,18,25v0,6,-4,9,-12,9<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2101" class="blob-num js-line-number" data-line-number="2101"></td>
        <td id="LC2101" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">173</span></td>
      </tr>
      <tr>
        <td id="L2102" class="blob-num js-line-number" data-line-number="2102"></td>
        <td id="LC2102" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2103" class="blob-num js-line-number" data-line-number="2103"></td>
        <td id="LC2103" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00e3</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2104" class="blob-num js-line-number" data-line-number="2104"></td>
        <td id="LC2104" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm114,-136v22,-8,41,-24,64,-26v3,11,-7,10,-7,21v-26,20,-45,30,-58,30v-3,3,-49,-26,-49,-28v-10,-1,-32,35,-51,31v-12,-32,8,-29,32,-51v24,-21,54,20,69,23<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2105" class="blob-num js-line-number" data-line-number="2105"></td>
        <td id="LC2105" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">173</span></td>
      </tr>
      <tr>
        <td id="L2106" class="blob-num js-line-number" data-line-number="2106"></td>
        <td id="LC2106" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2107" class="blob-num js-line-number" data-line-number="2107"></td>
        <td id="LC2107" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00e4</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2108" class="blob-num js-line-number" data-line-number="2108"></td>
        <td id="LC2108" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-32,5,-66,-64,-15,-77v39,-26,92,-36,104,9v0,6,-3,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm142,-119v0,8,-4,13,-12,13v-18,0,-21,-20,-16,-34v18,-1,28,2,28,21xm46,-144v7,3,28,9,27,18v1,8,-9,18,-18,17v-18,-1,-25,-25,-9,-35<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2109" class="blob-num js-line-number" data-line-number="2109"></td>
        <td id="LC2109" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">173</span></td>
      </tr>
      <tr>
        <td id="L2110" class="blob-num js-line-number" data-line-number="2110"></td>
        <td id="LC2110" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2111" class="blob-num js-line-number" data-line-number="2111"></td>
        <td id="LC2111" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00e5</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2112" class="blob-num js-line-number" data-line-number="2112"></td>
        <td id="LC2112" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm54,-101v-37,-20,-9,-71,34,-65v13,1,25,3,38,13v27,45,-34,73,-72,52xm61,-128v4,20,48,7,49,-5v0,-5,-9,-7,-28,-10v-12,-2,-21,11,-21,15<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2113" class="blob-num js-line-number" data-line-number="2113"></td>
        <td id="LC2113" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">173</span></td>
      </tr>
      <tr>
        <td id="L2114" class="blob-num js-line-number" data-line-number="2114"></td>
        <td id="LC2114" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2115" class="blob-num js-line-number" data-line-number="2115"></td>
        <td id="LC2115" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00e6</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2116" class="blob-num js-line-number" data-line-number="2116"></td>
        <td id="LC2116" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>145,-44r33,7v2,42,-59,29,-85,16v-6,7,-35,24,-48,15v-19,2,-35,-21,-33,-37v2,-24,5,-19,28,-36v-6,-8,-45,3,-33,-21v21,-22,58,-12,85,-1v6,-5,35,-28,45,-15v20,-4,36,17,36,35v0,23,-4,21,-28,37xm111,-72v12,3,49,-16,19,-17v-5,0,-20,12,-19,17xm74,-50v-14,-4,-48,16,-19,17v4,1,19,-14,19,-17<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2117" class="blob-num js-line-number" data-line-number="2117"></td>
        <td id="LC2117" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">184</span></td>
      </tr>
      <tr>
        <td id="L2118" class="blob-num js-line-number" data-line-number="2118"></td>
        <td id="LC2118" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2119" class="blob-num js-line-number" data-line-number="2119"></td>
        <td id="LC2119" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00e7</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2120" class="blob-num js-line-number" data-line-number="2120"></td>
        <td id="LC2120" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>108,-118v30,-6,56,21,25,33v-24,-6,-39,5,-75,23v-7,4,-12,12,-15,22v31,28,86,3,128,9v3,28,-29,16,-44,28v-53,15,-106,10,-120,-37v0,-48,62,-70,101,-78xm92,18v23,4,45,12,48,32v-2,6,-12,28,-25,28v-24,6,-50,10,-77,13v-16,-4,-11,-28,7,-29v17,-1,51,-4,63,-12v-14,-15,-57,10,-46,-32v9,-8,0,-25,21,-26v6,6,12,14,9,26<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2121" class="blob-num js-line-number" data-line-number="2121"></td>
        <td id="LC2121" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">171</span></td>
      </tr>
      <tr>
        <td id="L2122" class="blob-num js-line-number" data-line-number="2122"></td>
        <td id="LC2122" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2123" class="blob-num js-line-number" data-line-number="2123"></td>
        <td id="LC2123" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00e8</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2124" class="blob-num js-line-number" data-line-number="2124"></td>
        <td id="LC2124" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>108,-124v42,-3,70,39,50,73v-22,-1,-70,12,-94,10v-1,1,-2,3,-2,3v0,3,12,7,35,14v18,0,64,7,30,21v-10,14,-31,6,-53,6v-26,-7,-70,-26,-70,-58v0,-54,48,-65,104,-69xm130,-78v-2,-35,-66,-13,-77,3v16,6,62,6,77,-3xm95,-166v7,6,54,14,37,40v-28,-7,-62,-21,-100,-41v-3,-3,-3,-26,5,-24v16,5,42,18,58,25<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2125" class="blob-num js-line-number" data-line-number="2125"></td>
        <td id="LC2125" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">161</span></td>
      </tr>
      <tr>
        <td id="L2126" class="blob-num js-line-number" data-line-number="2126"></td>
        <td id="LC2126" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2127" class="blob-num js-line-number" data-line-number="2127"></td>
        <td id="LC2127" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00e9</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2128" class="blob-num js-line-number" data-line-number="2128"></td>
        <td id="LC2128" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>108,-124v42,-3,70,39,50,73v-22,-1,-70,12,-94,10v-1,1,-2,3,-2,3v0,3,12,7,35,14v18,0,64,7,30,21v-10,14,-31,6,-53,6v-26,-7,-70,-26,-70,-58v0,-54,48,-65,104,-69xm130,-78v-2,-35,-66,-13,-77,3v16,6,62,6,77,-3xm76,-169v26,-11,48,-32,59,-14v3,10,-80,53,-89,53v-14,1,-14,-10,-12,-21v15,-7,16,-7,42,-18<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2129" class="blob-num js-line-number" data-line-number="2129"></td>
        <td id="LC2129" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">161</span></td>
      </tr>
      <tr>
        <td id="L2130" class="blob-num js-line-number" data-line-number="2130"></td>
        <td id="LC2130" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2131" class="blob-num js-line-number" data-line-number="2131"></td>
        <td id="LC2131" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00ea</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2132" class="blob-num js-line-number" data-line-number="2132"></td>
        <td id="LC2132" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>108,-124v42,-3,70,39,50,73v-22,-1,-70,12,-94,10v-1,1,-2,3,-2,3v0,3,12,7,35,14v18,0,64,7,30,21v-10,14,-31,6,-53,6v-26,-7,-70,-26,-70,-58v0,-54,48,-65,104,-69xm130,-78v-2,-35,-66,-13,-77,3v16,6,62,6,77,-3xm145,-129v-27,-6,-39,-26,-60,-37v-8,0,-10,4,-14,10v-11,15,-51,34,-56,0v17,-4,44,-32,61,-43v28,5,41,21,63,36v12,8,17,17,17,25v0,6,-3,9,-11,9<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2133" class="blob-num js-line-number" data-line-number="2133"></td>
        <td id="LC2133" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">161</span></td>
      </tr>
      <tr>
        <td id="L2134" class="blob-num js-line-number" data-line-number="2134"></td>
        <td id="LC2134" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2135" class="blob-num js-line-number" data-line-number="2135"></td>
        <td id="LC2135" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00eb</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2136" class="blob-num js-line-number" data-line-number="2136"></td>
        <td id="LC2136" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>108,-124v42,-3,70,39,50,73v-22,-1,-70,12,-94,10r-3,3v0,3,12,7,36,14v18,0,64,7,30,21v-10,14,-31,6,-53,6v-26,-7,-67,-27,-71,-58v7,-52,48,-65,105,-69xm130,-78v-2,-35,-66,-13,-77,3v16,6,62,6,77,-3xm140,-144v0,8,-4,12,-12,12v-18,0,-19,-19,-16,-33v18,-1,29,1,28,21xm44,-169v7,3,28,9,28,17v0,9,-9,18,-18,18v-18,0,-25,-24,-10,-35<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2137" class="blob-num js-line-number" data-line-number="2137"></td>
        <td id="LC2137" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">161</span></td>
      </tr>
      <tr>
        <td id="L2138" class="blob-num js-line-number" data-line-number="2138"></td>
        <td id="LC2138" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2139" class="blob-num js-line-number" data-line-number="2139"></td>
        <td id="LC2139" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00ec</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2140" class="blob-num js-line-number" data-line-number="2140"></td>
        <td id="LC2140" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>57,-98v22,5,13,50,11,95v-7,1,-11,2,-20,-4v1,-7,-12,-18,-10,-24v4,-22,-2,-64,19,-67xm70,-139v14,10,54,14,37,41v-28,-7,-61,-22,-99,-42v-3,-2,-3,-25,5,-23v15,5,41,17,57,24<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2141" class="blob-num js-line-number" data-line-number="2141"></td>
        <td id="LC2141" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">109</span></td>
      </tr>
      <tr>
        <td id="L2142" class="blob-num js-line-number" data-line-number="2142"></td>
        <td id="LC2142" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2143" class="blob-num js-line-number" data-line-number="2143"></td>
        <td id="LC2143" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00ed</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2144" class="blob-num js-line-number" data-line-number="2144"></td>
        <td id="LC2144" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>59,-98v20,4,15,53,10,95v-6,1,-11,2,-19,-4v1,-7,-12,-18,-10,-24v4,-22,-4,-65,19,-67xm50,-139v27,-11,49,-32,59,-14v3,11,-80,53,-89,53v-14,1,-14,-12,-11,-22v15,-7,14,-6,41,-17<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2145" class="blob-num js-line-number" data-line-number="2145"></td>
        <td id="LC2145" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">105</span></td>
      </tr>
      <tr>
        <td id="L2146" class="blob-num js-line-number" data-line-number="2146"></td>
        <td id="LC2146" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2147" class="blob-num js-line-number" data-line-number="2147"></td>
        <td id="LC2147" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00ee</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2148" class="blob-num js-line-number" data-line-number="2148"></td>
        <td id="LC2148" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>72,-98v20,5,12,51,10,95v-6,2,-13,1,-20,-4v1,-8,-12,-18,-10,-24v4,-22,-3,-65,20,-67xm134,-94v-26,-7,-39,-25,-60,-37v-7,0,-9,4,-13,10v-14,15,-51,34,-56,-1v18,-4,45,-33,61,-43v27,6,40,22,62,37v12,8,18,17,18,25v0,6,-4,9,-12,9<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2149" class="blob-num js-line-number" data-line-number="2149"></td>
        <td id="LC2149" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">143</span></td>
      </tr>
      <tr>
        <td id="L2150" class="blob-num js-line-number" data-line-number="2150"></td>
        <td id="LC2150" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2151" class="blob-num js-line-number" data-line-number="2151"></td>
        <td id="LC2151" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00ef</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2152" class="blob-num js-line-number" data-line-number="2152"></td>
        <td id="LC2152" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>55,-97v19,5,15,53,10,95v-17,5,-26,-14,-30,-28v6,-20,-3,-65,20,-67xm110,-118v0,8,-4,13,-12,13v-17,0,-19,-19,-16,-34v18,-1,29,1,28,21xm14,-143v6,3,28,8,28,17v0,9,-9,18,-18,18v-18,0,-25,-24,-10,-35<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2153" class="blob-num js-line-number" data-line-number="2153"></td>
        <td id="LC2153" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">107</span></td>
      </tr>
      <tr>
        <td id="L2154" class="blob-num js-line-number" data-line-number="2154"></td>
        <td id="LC2154" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2155" class="blob-num js-line-number" data-line-number="2155"></td>
        <td id="LC2155" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00f1</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2156" class="blob-num js-line-number" data-line-number="2156"></td>
        <td id="LC2156" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>115,-129v34,6,59,50,59,105v0,31,-15,24,-30,17v-15,-29,-5,-42,-20,-81v-35,-13,-68,52,-88,61v-20,-4,-38,-36,-19,-59v0,-12,3,-14,10,-28v11,-8,18,11,27,12xm117,-166v22,-7,41,-23,64,-26v3,11,-7,10,-7,21v-26,20,-45,30,-58,30v-3,3,-49,-26,-49,-28v-10,-1,-32,35,-51,31v-5,-12,-8,-16,0,-23v4,-6,28,-29,48,-33v17,-3,43,28,53,28<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2157" class="blob-num js-line-number" data-line-number="2157"></td>
        <td id="LC2157" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">171</span></td>
      </tr>
      <tr>
        <td id="L2158" class="blob-num js-line-number" data-line-number="2158"></td>
        <td id="LC2158" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2159" class="blob-num js-line-number" data-line-number="2159"></td>
        <td id="LC2159" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00f2</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2160" class="blob-num js-line-number" data-line-number="2160"></td>
        <td id="LC2160" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm115,-181v14,10,51,13,37,40v-28,-7,-62,-21,-100,-41v-3,-2,-3,-26,5,-23v16,5,42,17,58,24<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2161" class="blob-num js-line-number" data-line-number="2161"></td>
        <td id="LC2161" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">191</span></td>
      </tr>
      <tr>
        <td id="L2162" class="blob-num js-line-number" data-line-number="2162"></td>
        <td id="LC2162" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2163" class="blob-num js-line-number" data-line-number="2163"></td>
        <td id="LC2163" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00f3</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2164" class="blob-num js-line-number" data-line-number="2164"></td>
        <td id="LC2164" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm49,-154v24,-3,85,-55,101,-32v3,11,-80,53,-89,53v-14,0,-13,-8,-12,-21<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2165" class="blob-num js-line-number" data-line-number="2165"></td>
        <td id="LC2165" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">191</span></td>
      </tr>
      <tr>
        <td id="L2166" class="blob-num js-line-number" data-line-number="2166"></td>
        <td id="LC2166" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2167" class="blob-num js-line-number" data-line-number="2167"></td>
        <td id="LC2167" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00f4</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2168" class="blob-num js-line-number" data-line-number="2168"></td>
        <td id="LC2168" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm110,-177v-22,6,-38,45,-65,22v-2,-4,-3,-9,-4,-13v18,-4,43,-32,61,-43v27,6,40,21,62,36v12,9,18,17,18,25v1,11,-15,10,-23,7<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2169" class="blob-num js-line-number" data-line-number="2169"></td>
        <td id="LC2169" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">191</span></td>
      </tr>
      <tr>
        <td id="L2170" class="blob-num js-line-number" data-line-number="2170"></td>
        <td id="LC2170" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2171" class="blob-num js-line-number" data-line-number="2171"></td>
        <td id="LC2171" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00f5</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2172" class="blob-num js-line-number" data-line-number="2172"></td>
        <td id="LC2172" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm58,-199v26,-21,54,18,69,22v4,0,15,-5,34,-13v22,-9,21,-16,31,-13v3,11,-9,9,-7,22v-26,20,-46,30,-59,30v-2,4,-49,-28,-49,-29v-11,0,-32,31,-46,32v-12,-3,-13,-21,-4,-23v4,-6,14,-15,31,-28<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2173" class="blob-num js-line-number" data-line-number="2173"></td>
        <td id="LC2173" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">191</span></td>
      </tr>
      <tr>
        <td id="L2174" class="blob-num js-line-number" data-line-number="2174"></td>
        <td id="LC2174" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2175" class="blob-num js-line-number" data-line-number="2175"></td>
        <td id="LC2175" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00f6</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2176" class="blob-num js-line-number" data-line-number="2176"></td>
        <td id="LC2176" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm161,-160v0,8,-4,13,-12,13v-17,0,-19,-19,-16,-34v18,-1,29,1,28,21xm65,-185v7,3,28,9,28,18v0,7,-9,18,-18,17v-18,1,-25,-24,-10,-35<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2177" class="blob-num js-line-number" data-line-number="2177"></td>
        <td id="LC2177" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">191</span></td>
      </tr>
      <tr>
        <td id="L2178" class="blob-num js-line-number" data-line-number="2178"></td>
        <td id="LC2178" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2179" class="blob-num js-line-number" data-line-number="2179"></td>
        <td id="LC2179" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00f7</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2180" class="blob-num js-line-number" data-line-number="2180"></td>
        <td id="LC2180" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>167,-158v-4,3,-7,9,-10,20v-23,4,-34,-8,-29,-31v14,-6,18,1,39,11xm78,-72v-53,11,-53,12,-69,-15v-1,-12,11,-17,22,-14v71,-13,151,-18,230,-24v11,1,21,16,23,28v-28,20,-90,11,-126,16v-36,5,-62,5,-80,9xm123,-40v19,-17,41,-1,41,17v0,13,-6,19,-17,19v-15,0,-29,-14,-24,-36<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2181" class="blob-num js-line-number" data-line-number="2181"></td>
        <td id="LC2181" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">293</span></td>
      </tr>
      <tr>
        <td id="L2182" class="blob-num js-line-number" data-line-number="2182"></td>
        <td id="LC2182" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2183" class="blob-num js-line-number" data-line-number="2183"></td>
        <td id="LC2183" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00f8</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2184" class="blob-num js-line-number" data-line-number="2184"></td>
        <td id="LC2184" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>76,-136v17,7,33,-8,51,0v9,-6,21,-13,36,-21v23,22,-13,31,3,50v11,13,4,21,14,35v-4,5,-1,14,-4,23v-14,23,-45,41,-84,39v-12,2,-29,28,-41,38v-2,-11,-34,-10,-15,-30v3,-7,5,-11,5,-11v-15,-24,-60,-54,-22,-89v23,-21,25,-32,57,-34xm102,-54v18,1,50,-19,30,-32v-12,7,-22,18,-30,32xm85,-92v-14,3,-26,8,-38,17v2,20,17,13,26,0v6,-8,12,-13,12,-17<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2185" class="blob-num js-line-number" data-line-number="2185"></td>
        <td id="LC2185" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">188</span></td>
      </tr>
      <tr>
        <td id="L2186" class="blob-num js-line-number" data-line-number="2186"></td>
        <td id="LC2186" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2187" class="blob-num js-line-number" data-line-number="2187"></td>
        <td id="LC2187" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00f9</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2188" class="blob-num js-line-number" data-line-number="2188"></td>
        <td id="LC2188" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>196,-129v-1,-4,12,-13,15,-13v6,0,8,7,8,21v0,24,-7,25,-13,45v-7,7,-14,21,-24,29v-9,24,-61,45,-89,45v-63,0,-105,-72,-67,-126v24,-3,19,27,18,46v-1,26,23,42,54,40v38,-3,88,-51,98,-87xm126,-166v7,6,56,14,37,40v-28,-7,-62,-22,-100,-42v-2,-3,-2,-26,5,-23v16,4,42,18,58,25<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2189" class="blob-num js-line-number" data-line-number="2189"></td>
        <td id="LC2189" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">213</span></td>
      </tr>
      <tr>
        <td id="L2190" class="blob-num js-line-number" data-line-number="2190"></td>
        <td id="LC2190" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2191" class="blob-num js-line-number" data-line-number="2191"></td>
        <td id="LC2191" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00fa</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2192" class="blob-num js-line-number" data-line-number="2192"></td>
        <td id="LC2192" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>196,-129v-1,-4,12,-13,15,-13v6,0,8,7,8,21v0,24,-7,25,-13,45v-7,7,-14,21,-24,29v-9,24,-61,45,-89,45v-63,0,-105,-72,-67,-126v24,-3,19,27,18,46v-1,26,23,42,54,40v38,-3,88,-51,98,-87xm106,-174v26,-11,48,-32,59,-14v3,11,-81,53,-89,54v-13,1,-15,-12,-11,-22v15,-7,14,-7,41,-18<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2193" class="blob-num js-line-number" data-line-number="2193"></td>
        <td id="LC2193" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">213</span></td>
      </tr>
      <tr>
        <td id="L2194" class="blob-num js-line-number" data-line-number="2194"></td>
        <td id="LC2194" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2195" class="blob-num js-line-number" data-line-number="2195"></td>
        <td id="LC2195" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00fb</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2196" class="blob-num js-line-number" data-line-number="2196"></td>
        <td id="LC2196" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>196,-129v-1,-4,12,-13,15,-13v6,0,8,7,8,21v0,24,-7,25,-13,45v-7,7,-14,21,-24,29v-9,24,-61,45,-89,45v-63,0,-105,-72,-67,-126v24,-3,19,27,18,46v-1,26,23,42,54,40v38,-3,88,-51,98,-87xm172,-143v-27,-6,-39,-26,-60,-37v-8,0,-10,4,-14,10v-11,15,-49,35,-56,0v17,-4,44,-32,61,-43v27,6,41,21,63,36v12,9,17,17,17,25v0,6,-3,9,-11,9<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2197" class="blob-num js-line-number" data-line-number="2197"></td>
        <td id="LC2197" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">213</span></td>
      </tr>
      <tr>
        <td id="L2198" class="blob-num js-line-number" data-line-number="2198"></td>
        <td id="LC2198" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2199" class="blob-num js-line-number" data-line-number="2199"></td>
        <td id="LC2199" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00fc</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2200" class="blob-num js-line-number" data-line-number="2200"></td>
        <td id="LC2200" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>196,-129v-1,-4,12,-13,15,-13v6,0,8,7,8,21v0,24,-7,25,-13,45v-7,7,-14,21,-24,29v-9,24,-61,45,-89,45v-63,0,-105,-72,-67,-126v24,-3,19,27,18,46v-1,26,23,42,54,40v38,-3,88,-51,98,-87xm168,-161v0,8,-3,13,-11,13v-17,0,-20,-19,-17,-34v18,-1,29,1,28,21xm72,-186v7,3,29,9,28,18v0,7,-9,18,-18,17v-18,1,-25,-24,-10,-35<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2201" class="blob-num js-line-number" data-line-number="2201"></td>
        <td id="LC2201" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">213</span></td>
      </tr>
      <tr>
        <td id="L2202" class="blob-num js-line-number" data-line-number="2202"></td>
        <td id="LC2202" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2203" class="blob-num js-line-number" data-line-number="2203"></td>
        <td id="LC2203" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00ff</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2204" class="blob-num js-line-number" data-line-number="2204"></td>
        <td id="LC2204" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>118,85v-11,11,-11,38,-22,61v-2,-1,-2,31,-17,27v-11,0,-21,-10,-21,-22v20,-66,23,-61,64,-168v-22,1,-38,16,-58,4v-22,4,-51,-16,-51,-42v-11,-13,-7,-59,7,-58v16,1,21,24,22,51v21,33,66,5,94,-7v4,-3,26,-14,38,-29r17,0v23,44,-23,59,-34,102v-6,9,-13,9,-13,26v-15,6,-12,33,-27,48v0,2,1,4,1,7xm158,-136v0,8,-4,13,-12,13v-18,0,-21,-20,-16,-34v18,-1,29,1,28,21xm62,-161v7,3,28,9,27,18v1,8,-8,17,-17,17v-18,0,-26,-24,-10,-35<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2205" class="blob-num js-line-number" data-line-number="2205"></td>
        <td id="LC2205" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">190</span></td>
      </tr>
      <tr>
        <td id="L2206" class="blob-num js-line-number" data-line-number="2206"></td>
        <td id="LC2206" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2207" class="blob-num js-line-number" data-line-number="2207"></td>
        <td id="LC2207" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u0131</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2208" class="blob-num js-line-number" data-line-number="2208"></td>
        <td id="LC2208" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>43,-103v21,4,16,56,11,100v-7,2,-11,1,-20,-5v0,-7,-13,-18,-11,-25v4,-23,-3,-68,20,-70<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2209" class="blob-num js-line-number" data-line-number="2209"></td>
        <td id="LC2209" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">80</span></td>
      </tr>
      <tr>
        <td id="L2210" class="blob-num js-line-number" data-line-number="2210"></td>
        <td id="LC2210" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2211" class="blob-num js-line-number" data-line-number="2211"></td>
        <td id="LC2211" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u0152</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2212" class="blob-num js-line-number" data-line-number="2212"></td>
        <td id="LC2212" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>247,-243v71,4,161,-7,245,-8v17,0,27,6,27,17v-8,27,-70,14,-104,23v-3,1,-52,0,-65,7r0,4v16,16,17,29,17,65v32,10,74,-14,99,16v-14,25,-76,17,-127,24v-17,18,-55,32,-75,51v85,0,128,-3,204,-11v15,-2,21,11,20,29v-78,24,-177,12,-270,24v-24,3,-24,-29,-48,-15v-46,7,-70,4,-105,-4v-19,-18,-42,-22,-52,-55v-10,-34,0,-47,12,-78v-18,-59,48,-78,105,-84v17,-18,103,-13,117,-5xm125,-45v76,-9,186,-43,209,-105v-26,-67,-137,-83,-217,-54v3,34,-45,25,-60,58v-41,48,5,108,68,101<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2213" class="blob-num js-line-number" data-line-number="2213"></td>
        <td id="LC2213" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">492</span></td>
      </tr>
      <tr>
        <td id="L2214" class="blob-num js-line-number" data-line-number="2214"></td>
        <td id="LC2214" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2215" class="blob-num js-line-number" data-line-number="2215"></td>
        <td id="LC2215" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u0153</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2216" class="blob-num js-line-number" data-line-number="2216"></td>
        <td id="LC2216" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>185,-54v25,28,107,-17,104,33v-12,12,-60,14,-87,14v0,0,1,1,2,1v-11,1,-39,-9,-50,-17v-28,17,-75,32,-114,7v-22,-14,-34,-11,-34,-41v0,-36,33,-49,48,-75v29,-16,72,-3,95,11v12,-9,48,-27,59,-26v30,0,64,15,65,40v0,7,-6,20,-20,37v-29,1,-44,11,-68,16xm226,-106v-21,-7,-41,-2,-48,13v14,1,42,-7,48,-13xm132,-87v-21,-35,-94,11,-92,24v-2,14,43,21,61,21v25,0,36,-20,31,-45<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2217" class="blob-num js-line-number" data-line-number="2217"></td>
        <td id="LC2217" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">295</span></td>
      </tr>
      <tr>
        <td id="L2218" class="blob-num js-line-number" data-line-number="2218"></td>
        <td id="LC2218" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2219" class="blob-num js-line-number" data-line-number="2219"></td>
        <td id="LC2219" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u0178</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2220" class="blob-num js-line-number" data-line-number="2220"></td>
        <td id="LC2220" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>176,-189v35,20,-25,54,-39,72v-26,34,-57,57,-74,104v-10,15,-4,14,-23,3r0,-10v19,-44,27,-46,50,-81v-9,-5,-24,4,-34,4v-38,0,-54,-50,-44,-87v21,-5,18,19,22,35v4,18,15,27,29,27v41,0,60,-39,113,-67xm153,-222v0,8,-3,12,-11,12v-18,0,-21,-19,-16,-33v18,-1,28,2,27,21xm57,-247v8,2,29,9,28,17v0,21,-37,24,-36,1v0,-7,2,-13,8,-18<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2221" class="blob-num js-line-number" data-line-number="2221"></td>
        <td id="LC2221" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">135</span></td>
      </tr>
      <tr>
        <td id="L2222" class="blob-num js-line-number" data-line-number="2222"></td>
        <td id="LC2222" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2223" class="blob-num js-line-number" data-line-number="2223"></td>
        <td id="LC2223" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u0192</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2224" class="blob-num js-line-number" data-line-number="2224"></td>
        <td id="LC2224" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>115,-262v-23,6,-39,63,-38,96v1,3,57,2,54,16v1,22,-45,15,-51,30v3,34,12,68,10,103v14,17,-18,53,-28,63v-48,8,-89,5,-95,-37v20,-5,77,21,83,-18v17,-29,-4,-61,0,-98v0,-5,-3,-10,-7,-17v-33,4,-43,-17,-25,-37v10,-4,27,5,27,-10v0,-43,15,-77,32,-109v12,-7,16,-22,38,-20v11,1,51,35,25,55v-9,1,-16,-17,-25,-17<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2225" class="blob-num js-line-number" data-line-number="2225"></td>
        <td id="LC2225" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">145</span></td>
      </tr>
      <tr>
        <td id="L2226" class="blob-num js-line-number" data-line-number="2226"></td>
        <td id="LC2226" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2227" class="blob-num js-line-number" data-line-number="2227"></td>
        <td id="LC2227" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u02c6</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2228" class="blob-num js-line-number" data-line-number="2228"></td>
        <td id="LC2228" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>144,-220v-29,0,-41,-27,-63,-39v-8,0,-11,5,-15,11v-17,12,-32,31,-54,13v-2,-5,-3,-9,-4,-14v20,-5,45,-33,64,-45v28,6,43,23,65,38v12,9,19,19,19,27v0,6,-4,9,-12,9<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2229" class="blob-num js-line-number" data-line-number="2229"></td>
        <td id="LC2229" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">165</span></td>
      </tr>
      <tr>
        <td id="L2230" class="blob-num js-line-number" data-line-number="2230"></td>
        <td id="LC2230" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2231" class="blob-num js-line-number" data-line-number="2231"></td>
        <td id="LC2231" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u02c7</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2232" class="blob-num js-line-number" data-line-number="2232"></td>
        <td id="LC2232" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>39,-286v33,46,63,-4,96,-16v6,0,9,6,9,19v0,24,-49,46,-77,46v-32,0,-52,-28,-59,-48v0,-25,23,-17,31,-1<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2233" class="blob-num js-line-number" data-line-number="2233"></td>
        <td id="LC2233" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">153</span></td>
      </tr>
      <tr>
        <td id="L2234" class="blob-num js-line-number" data-line-number="2234"></td>
        <td id="LC2234" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2235" class="blob-num js-line-number" data-line-number="2235"></td>
        <td id="LC2235" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u02d8</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2236" class="blob-num js-line-number" data-line-number="2236"></td>
        <td id="LC2236" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>65,-269v20,-11,45,-31,74,-36v20,30,-42,40,-59,66v-5,6,-11,8,-18,8v-8,-3,-45,-32,-51,-54v5,-24,14,-13,34,1<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2237" class="blob-num js-line-number" data-line-number="2237"></td>
        <td id="LC2237" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">158</span></td>
      </tr>
      <tr>
        <td id="L2238" class="blob-num js-line-number" data-line-number="2238"></td>
        <td id="LC2238" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2239" class="blob-num js-line-number" data-line-number="2239"></td>
        <td id="LC2239" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u02d9</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2240" class="blob-num js-line-number" data-line-number="2240"></td>
        <td id="LC2240" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>23,-302v15,-13,32,1,32,18v1,22,-36,29,-39,4v0,0,3,-7,7,-22<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2241" class="blob-num js-line-number" data-line-number="2241"></td>
        <td id="LC2241" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">70</span></td>
      </tr>
      <tr>
        <td id="L2242" class="blob-num js-line-number" data-line-number="2242"></td>
        <td id="LC2242" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2243" class="blob-num js-line-number" data-line-number="2243"></td>
        <td id="LC2243" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u02da</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2244" class="blob-num js-line-number" data-line-number="2244"></td>
        <td id="LC2244" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>23,-225v-43,-24,-11,-85,41,-78v16,2,31,4,46,17v32,54,-41,86,-87,61xm33,-257v2,20,57,11,57,-6v0,-6,-11,-9,-33,-12v-14,-2,-24,13,-24,18<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2245" class="blob-num js-line-number" data-line-number="2245"></td>
        <td id="LC2245" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">123</span></td>
      </tr>
      <tr>
        <td id="L2246" class="blob-num js-line-number" data-line-number="2246"></td>
        <td id="LC2246" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2247" class="blob-num js-line-number" data-line-number="2247"></td>
        <td id="LC2247" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u02db</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2248" class="blob-num js-line-number" data-line-number="2248"></td>
        <td id="LC2248" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>82,-5v-8,12,-16,55,-21,75v0,4,2,7,7,7v6,0,22,-7,50,-20v8,0,12,7,12,20v-2,22,-6,14,-27,30v-15,12,-26,16,-30,16v-47,-8,-59,-14,-56,-75v8,-27,12,-54,25,-77v19,-21,35,15,40,24<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2249" class="blob-num js-line-number" data-line-number="2249"></td>
        <td id="LC2249" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">138</span></td>
      </tr>
      <tr>
        <td id="L2250" class="blob-num js-line-number" data-line-number="2250"></td>
        <td id="LC2250" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2251" class="blob-num js-line-number" data-line-number="2251"></td>
        <td id="LC2251" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u02dc</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2252" class="blob-num js-line-number" data-line-number="2252"></td>
        <td id="LC2252" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>47,-300v26,-21,57,19,72,23v4,0,16,-5,36,-14v24,-10,22,-16,32,-13v3,12,-7,11,-7,23v-27,21,-48,32,-62,32v-3,2,-52,-27,-51,-31v-12,-2,-34,40,-54,33v-4,-13,-8,-18,1,-24v5,-7,16,-15,33,-29<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2253" class="blob-num js-line-number" data-line-number="2253"></td>
        <td id="LC2253" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">186</span></td>
      </tr>
      <tr>
        <td id="L2254" class="blob-num js-line-number" data-line-number="2254"></td>
        <td id="LC2254" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2255" class="blob-num js-line-number" data-line-number="2255"></td>
        <td id="LC2255" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u02dd</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2256" class="blob-num js-line-number" data-line-number="2256"></td>
        <td id="LC2256" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>91,-249v15,-11,38,-53,57,-29v0,9,0,14,-3,23v-2,3,-20,22,-54,55v-5,5,-10,8,-16,8v-17,2,-6,-22,-7,-31v-1,0,-2,0,-4,1v-17,21,-29,31,-50,27v-5,-18,-3,-15,3,-27v23,-27,40,-46,48,-59v7,-12,31,3,29,9v-1,14,-3,24,-13,31v4,4,9,-1,10,-8<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2257" class="blob-num js-line-number" data-line-number="2257"></td>
        <td id="LC2257" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">151</span></td>
      </tr>
      <tr>
        <td id="L2258" class="blob-num js-line-number" data-line-number="2258"></td>
        <td id="LC2258" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2259" class="blob-num js-line-number" data-line-number="2259"></td>
        <td id="LC2259" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2013</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2260" class="blob-num js-line-number" data-line-number="2260"></td>
        <td id="LC2260" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>6,-66v-8,-72,79,-21,146,-39v37,-10,79,7,111,0v9,8,14,13,14,17v2,26,-72,13,-99,21v-83,4,-124,21,-172,1<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2261" class="blob-num js-line-number" data-line-number="2261"></td>
        <td id="LC2261" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">282</span></td>
      </tr>
      <tr>
        <td id="L2262" class="blob-num js-line-number" data-line-number="2262"></td>
        <td id="LC2262" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2263" class="blob-num js-line-number" data-line-number="2263"></td>
        <td id="LC2263" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2014</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2264" class="blob-num js-line-number" data-line-number="2264"></td>
        <td id="LC2264" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>175,-106v86,-9,201,1,286,-1v11,6,13,11,6,30v-118,15,-246,10,-377,10v-25,0,-73,3,-82,-8r-2,-26v11,-13,32,-9,52,-7v38,3,84,-5,117,2<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2265" class="blob-num js-line-number" data-line-number="2265"></td>
        <td id="LC2265" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">485</span></td>
      </tr>
      <tr>
        <td id="L2266" class="blob-num js-line-number" data-line-number="2266"></td>
        <td id="LC2266" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2267" class="blob-num js-line-number" data-line-number="2267"></td>
        <td id="LC2267" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2018</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2268" class="blob-num js-line-number" data-line-number="2268"></td>
        <td id="LC2268" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>73,-262v-10,7,-41,39,-38,69v-15,13,-27,-16,-28,-28v-2,-20,51,-83,66,-83v20,0,25,41,0,42<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2269" class="blob-num js-line-number" data-line-number="2269"></td>
        <td id="LC2269" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">95</span></td>
      </tr>
      <tr>
        <td id="L2270" class="blob-num js-line-number" data-line-number="2270"></td>
        <td id="LC2270" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2271" class="blob-num js-line-number" data-line-number="2271"></td>
        <td id="LC2271" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2019</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2272" class="blob-num js-line-number" data-line-number="2272"></td>
        <td id="LC2272" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>74,-300v13,31,-1,99,-44,101v-13,0,-19,-5,-19,-15v6,-10,31,-34,35,-59v2,-11,1,-32,11,-32v6,0,11,2,17,5<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2273" class="blob-num js-line-number" data-line-number="2273"></td>
        <td id="LC2273" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">90</span></td>
      </tr>
      <tr>
        <td id="L2274" class="blob-num js-line-number" data-line-number="2274"></td>
        <td id="LC2274" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2275" class="blob-num js-line-number" data-line-number="2275"></td>
        <td id="LC2275" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u201a</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2276" class="blob-num js-line-number" data-line-number="2276"></td>
        <td id="LC2276" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>25,63v-26,21,-48,-2,-22,-24v14,-12,35,-40,35,-69v3,-2,3,-11,12,-9v35,17,5,88,-25,102<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2277" class="blob-num js-line-number" data-line-number="2277"></td>
        <td id="LC2277" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">97</span></td>
      </tr>
      <tr>
        <td id="L2278" class="blob-num js-line-number" data-line-number="2278"></td>
        <td id="LC2278" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2279" class="blob-num js-line-number" data-line-number="2279"></td>
        <td id="LC2279" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u201c</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2280" class="blob-num js-line-number" data-line-number="2280"></td>
        <td id="LC2280" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>66,-261v-21,5,-37,51,-22,77v0,4,-2,6,-7,6v-31,-9,-38,-62,-12,-94v12,-15,21,-28,31,-34v16,-1,19,24,22,34v10,-11,22,-32,43,-23v-2,8,4,16,5,19v-6,11,-51,53,-29,74v-12,21,-30,5,-33,-17v-6,-13,9,-28,2,-42<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2281" class="blob-num js-line-number" data-line-number="2281"></td>
        <td id="LC2281" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">118</span></td>
      </tr>
      <tr>
        <td id="L2282" class="blob-num js-line-number" data-line-number="2282"></td>
        <td id="LC2282" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2283" class="blob-num js-line-number" data-line-number="2283"></td>
        <td id="LC2283" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u201d</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2284" class="blob-num js-line-number" data-line-number="2284"></td>
        <td id="LC2284" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>120,-294v12,3,30,26,19,34v2,15,-40,70,-55,66v-40,-10,10,-51,14,-64v3,-3,8,-31,22,-36xm70,-306v14,3,26,34,16,49v-19,30,-31,45,-58,59v-12,-11,-33,-17,-7,-36v13,-19,36,-27,36,-59v0,-5,9,-13,13,-13<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2285" class="blob-num js-line-number" data-line-number="2285"></td>
        <td id="LC2285" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">148</span></td>
      </tr>
      <tr>
        <td id="L2286" class="blob-num js-line-number" data-line-number="2286"></td>
        <td id="LC2286" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2287" class="blob-num js-line-number" data-line-number="2287"></td>
        <td id="LC2287" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u201e</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2288" class="blob-num js-line-number" data-line-number="2288"></td>
        <td id="LC2288" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>25,63v-26,21,-48,-2,-22,-24v11,-9,36,-41,35,-69v3,-2,4,-12,12,-9v36,14,5,89,-25,102xm84,64v-24,20,-45,-1,-21,-24v21,-20,32,-35,35,-69v3,-2,3,-11,12,-9v36,17,9,86,-26,102<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2289" class="blob-num js-line-number" data-line-number="2289"></td>
        <td id="LC2289" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">135</span></td>
      </tr>
      <tr>
        <td id="L2290" class="blob-num js-line-number" data-line-number="2290"></td>
        <td id="LC2290" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2291" class="blob-num js-line-number" data-line-number="2291"></td>
        <td id="LC2291" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2020</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2292" class="blob-num js-line-number" data-line-number="2292"></td>
        <td id="LC2292" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>22,-286v15,6,5,-20,19,-19v9,-3,15,21,17,22v6,1,12,3,20,6v3,10,5,16,-9,16v-34,-10,-6,51,-34,52v-20,-7,11,-47,-15,-49v-14,3,-25,-5,-17,-24v7,-2,14,-4,19,-4<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2293" class="blob-num js-line-number" data-line-number="2293"></td>
        <td id="LC2293" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">77</span></td>
      </tr>
      <tr>
        <td id="L2294" class="blob-num js-line-number" data-line-number="2294"></td>
        <td id="LC2294" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2295" class="blob-num js-line-number" data-line-number="2295"></td>
        <td id="LC2295" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2021</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2296" class="blob-num js-line-number" data-line-number="2296"></td>
        <td id="LC2296" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>102,-284v16,2,42,-2,33,18v-7,15,-42,1,-38,30v3,3,31,1,30,11v4,15,-29,19,-36,24v-2,18,-4,24,-16,29r-25,-26v-25,7,-53,3,-42,-25v4,-10,70,0,51,-22v-17,4,-41,12,-39,-15v-5,-16,39,-18,44,-20v4,-2,7,-10,10,-24v19,-3,23,6,28,20<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2297" class="blob-num js-line-number" data-line-number="2297"></td>
        <td id="LC2297" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">145</span></td>
      </tr>
      <tr>
        <td id="L2298" class="blob-num js-line-number" data-line-number="2298"></td>
        <td id="LC2298" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2299" class="blob-num js-line-number" data-line-number="2299"></td>
        <td id="LC2299" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2022</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2300" class="blob-num js-line-number" data-line-number="2300"></td>
        <td id="LC2300" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>130,-114v0,47,-124,54,-120,-8r6,-31v44,-28,64,-34,104,0v8,6,10,20,10,39<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2301" class="blob-num js-line-number" data-line-number="2301"></td>
        <td id="LC2301" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">139</span></td>
      </tr>
      <tr>
        <td id="L2302" class="blob-num js-line-number" data-line-number="2302"></td>
        <td id="LC2302" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2303" class="blob-num js-line-number" data-line-number="2303"></td>
        <td id="LC2303" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2026</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2304" class="blob-num js-line-number" data-line-number="2304"></td>
        <td id="LC2304" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>244,-24v-1,21,-38,32,-41,3v-2,-19,23,-22,34,-17v0,7,0,15,7,14xm113,-24v0,-22,28,-21,38,-8v5,34,-39,40,-38,8xm35,-2v-10,-2,-36,-17,-18,-29v-1,-15,17,-17,31,-6v7,17,6,33,-13,35<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2305" class="blob-num js-line-number" data-line-number="2305"></td>
        <td id="LC2305" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">258</span></td>
      </tr>
      <tr>
        <td id="L2306" class="blob-num js-line-number" data-line-number="2306"></td>
        <td id="LC2306" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2307" class="blob-num js-line-number" data-line-number="2307"></td>
        <td id="LC2307" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2030</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2308" class="blob-num js-line-number" data-line-number="2308"></td>
        <td id="LC2308" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>398,-131v58,-1,87,13,72,65v-1,30,-66,63,-99,65v-56,3,-99,-58,-62,-102v2,2,5,2,8,2v20,-16,51,-17,81,-30xm202,-279v33,0,94,-24,95,18v-7,31,-33,27,-54,55v-36,32,-71,74,-112,99v-18,18,-40,34,-51,58v-19,14,-25,37,-56,40v-17,2,-25,-29,-10,-40v15,-11,40,-37,52,-52r87,-72v-51,13,-100,6,-116,-27v1,-5,-6,-30,-9,-36v-3,-5,22,-41,27,-39v29,2,16,34,5,49v0,15,14,23,42,23v42,0,59,-31,28,-38v-17,-4,-53,3,-50,-23v0,-7,1,-12,4,-16v16,-9,36,4,49,5v0,0,23,-4,69,-4xm222,-118v33,-2,55,18,50,57v-29,36,-48,45,-96,50v-27,-5,-56,-17,-58,-51v13,-37,64,-43,104,-56xm335,-61v13,44,101,7,108,-31v-11,-3,-20,-4,-30,-4v-18,-1,-82,18,-78,35xm225,-244v-18,0,-29,-1,-46,3v7,15,6,28,0,43v15,-14,34,-30,46,-46xm164,-53v26,5,59,-10,76,-26v-17,-16,-49,2,-67,14v1,8,-8,6,-9,12<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2309" class="blob-num js-line-number" data-line-number="2309"></td>
        <td id="LC2309" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">485</span></td>
      </tr>
      <tr>
        <td id="L2310" class="blob-num js-line-number" data-line-number="2310"></td>
        <td id="LC2310" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2311" class="blob-num js-line-number" data-line-number="2311"></td>
        <td id="LC2311" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2039</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2312" class="blob-num js-line-number" data-line-number="2312"></td>
        <td id="LC2312" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>64,-107v9,17,86,17,87,43v0,11,-4,16,-13,16v-36,-11,-70,-22,-109,-31v-19,-4,-18,-14,-9,-36v59,-56,93,-84,101,-84v17,0,19,20,13,29<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2313" class="blob-num js-line-number" data-line-number="2313"></td>
        <td id="LC2313" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">159</span></td>
      </tr>
      <tr>
        <td id="L2314" class="blob-num js-line-number" data-line-number="2314"></td>
        <td id="LC2314" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2315" class="blob-num js-line-number" data-line-number="2315"></td>
        <td id="LC2315" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u203a</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2316" class="blob-num js-line-number" data-line-number="2316"></td>
        <td id="LC2316" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>41,-181v26,27,112,44,70,91r-82,60v-20,3,-25,-23,-13,-32r70,-51r-66,-46v-5,-6,-4,-28,5,-29v4,2,9,4,16,7<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2317" class="blob-num js-line-number" data-line-number="2317"></td>
        <td id="LC2317" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">137</span></td>
      </tr>
      <tr>
        <td id="L2318" class="blob-num js-line-number" data-line-number="2318"></td>
        <td id="LC2318" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2319" class="blob-num js-line-number" data-line-number="2319"></td>
        <td id="LC2319" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2044</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2320" class="blob-num js-line-number" data-line-number="2320"></td>
        <td id="LC2320" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>193,-305v7,6,17,31,3,41v-10,7,-12,13,-21,25v-79,56,-190,209,-197,260r-18,0v-23,-19,9,-70,15,-85v52,-83,121,-179,218,-241<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2321" class="blob-num js-line-number" data-line-number="2321"></td>
        <td id="LC2321" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">120</span></td>
      </tr>
      <tr>
        <td id="L2322" class="blob-num js-line-number" data-line-number="2322"></td>
        <td id="LC2322" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2323" class="blob-num js-line-number" data-line-number="2323"></td>
        <td id="LC2323" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2122</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2324" class="blob-num js-line-number" data-line-number="2324"></td>
        <td id="LC2324" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>213,-307v28,9,11,49,7,75v-1,4,-4,6,-11,6v-7,1,-11,-14,-11,-34v-14,-6,-34,34,-46,28v-2,0,-10,-9,-24,-27v-10,7,-3,36,-27,31v-15,-24,-3,-27,1,-48v-6,-7,-27,-1,-31,3v-3,14,-7,30,-11,51v-5,10,-29,9,-24,-12v-5,-8,1,-18,3,-35v-13,6,-33,2,-29,-18v20,-17,64,-17,100,-19v28,-1,29,30,45,39v11,-6,35,-32,58,-40<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2325" class="blob-num js-line-number" data-line-number="2325"></td>
        <td id="LC2325" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">239</span></td>
      </tr>
      <tr>
        <td id="L2326" class="blob-num js-line-number" data-line-number="2326"></td>
        <td id="LC2326" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2327" class="blob-num js-line-number" data-line-number="2327"></td>
        <td id="LC2327" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2206</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2328" class="blob-num js-line-number" data-line-number="2328"></td>
        <td id="LC2328" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>18,-1v-24,-30,8,-48,25,-71v14,-19,34,-28,40,-56v20,-35,29,-14,57,4v9,39,43,62,57,102v0,16,-34,17,-50,14v-28,2,-72,4,-129,7xm139,-47r-22,-52v-12,-5,-12,15,-24,27v-7,6,-14,16,-23,28v23,1,36,-1,69,-3<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2329" class="blob-num js-line-number" data-line-number="2329"></td>
        <td id="LC2329" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">199</span></td>
      </tr>
      <tr>
        <td id="L2330" class="blob-num js-line-number" data-line-number="2330"></td>
        <td id="LC2330" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2331" class="blob-num js-line-number" data-line-number="2331"></td>
        <td id="LC2331" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2219</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2332" class="blob-num js-line-number" data-line-number="2332"></td>
        <td id="LC2332" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>57,-77v6,18,-7,21,-19,23v-34,6,-25,-40,-9,-43v18,-3,29,8,28,20<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2333" class="blob-num js-line-number" data-line-number="2333"></td>
        <td id="LC2333" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">67</span></td>
      </tr>
      <tr>
        <td id="L2334" class="blob-num js-line-number" data-line-number="2334"></td>
        <td id="LC2334" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2335" class="blob-num js-line-number" data-line-number="2335"></td>
        <td id="LC2335" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u221a</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2336" class="blob-num js-line-number" data-line-number="2336"></td>
        <td id="LC2336" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>364,-218v43,-21,80,-51,104,-32v-3,19,-24,21,-44,40v-41,15,-78,53,-136,78r-137,98v-20,16,-79,66,-91,68v-3,1,-25,-11,-24,-13v-4,-28,-43,-61,-30,-85v26,-15,42,19,58,32r295,-188v0,1,2,2,5,2<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2337" class="blob-num js-line-number" data-line-number="2337"></td>
        <td id="LC2337" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">474</span></td>
      </tr>
      <tr>
        <td id="L2338" class="blob-num js-line-number" data-line-number="2338"></td>
        <td id="LC2338" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2339" class="blob-num js-line-number" data-line-number="2339"></td>
        <td id="LC2339" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u221e</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2340" class="blob-num js-line-number" data-line-number="2340"></td>
        <td id="LC2340" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>322,-72v-4,22,-54,41,-76,41v-43,0,-83,-17,-114,-35v-46,19,-125,53,-128,-18v-1,-14,10,-22,13,-35v29,-10,62,-31,97,-4v37,28,47,5,75,-8v40,-19,73,-10,114,1v13,1,18,55,19,58xm228,-69v15,0,62,-12,61,-25v-19,-23,-89,-10,-105,11v0,2,1,4,2,4v28,6,42,10,42,10xm75,-102v-13,2,-41,4,-44,19v0,4,3,7,10,7v21,0,40,-6,54,-17v-9,-6,-16,-9,-20,-9<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2341" class="blob-num js-line-number" data-line-number="2341"></td>
        <td id="LC2341" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">330</span></td>
      </tr>
      <tr>
        <td id="L2342" class="blob-num js-line-number" data-line-number="2342"></td>
        <td id="LC2342" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2343" class="blob-num js-line-number" data-line-number="2343"></td>
        <td id="LC2343" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u222b</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2344" class="blob-num js-line-number" data-line-number="2344"></td>
        <td id="LC2344" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>62,-151v-7,-70,20,-130,63,-150v28,1,39,10,70,23v20,8,6,33,-6,35v-29,-13,-45,-20,-49,-20v-20,-4,-45,51,-43,70v8,60,5,129,5,189v0,62,-27,93,-79,93v-37,-1,-71,-14,-63,-57v21,0,79,34,91,-2v16,-3,14,-64,21,-85v-2,-31,-1,-74,-10,-96<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2345" class="blob-num js-line-number" data-line-number="2345"></td>
        <td id="LC2345" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">156</span></td>
      </tr>
      <tr>
        <td id="L2346" class="blob-num js-line-number" data-line-number="2346"></td>
        <td id="LC2346" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2347" class="blob-num js-line-number" data-line-number="2347"></td>
        <td id="LC2347" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2248</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2348" class="blob-num js-line-number" data-line-number="2348"></td>
        <td id="LC2348" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>133,-112v21,15,48,-30,78,-17v3,3,5,7,5,9v-8,30,-47,45,-76,45v-19,0,-64,-48,-90,-21r-29,20v-6,-1,-17,-16,-15,-32v24,-17,70,-42,107,-21v4,4,10,9,20,17xm138,-57v28,2,48,-25,76,-26v13,30,-21,42,-40,53v-41,24,-77,-15,-114,-23v-15,14,-46,32,-49,-1v-3,-9,27,-28,54,-30<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2349" class="blob-num js-line-number" data-line-number="2349"></td>
        <td id="LC2349" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">223</span></td>
      </tr>
      <tr>
        <td id="L2350" class="blob-num js-line-number" data-line-number="2350"></td>
        <td id="LC2350" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2351" class="blob-num js-line-number" data-line-number="2351"></td>
        <td id="LC2351" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2260</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2352" class="blob-num js-line-number" data-line-number="2352"></td>
        <td id="LC2352" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>48,-130v29,11,49,-57,60,-50v25,6,7,27,-1,46v22,5,29,7,21,22v-18,2,-48,-1,-50,15v9,8,53,-7,54,10v-4,22,-46,20,-72,24v-7,13,-18,32,-34,57v-8,6,-15,-3,-13,-14v-1,-9,15,-39,14,-45v-30,5,-24,-17,-13,-25v12,-1,36,4,29,-13v-14,0,-47,6,-36,-12v0,-18,27,-13,41,-15<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2353" class="blob-num js-line-number" data-line-number="2353"></td>
        <td id="LC2353" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">140</span></td>
      </tr>
      <tr>
        <td id="L2354" class="blob-num js-line-number" data-line-number="2354"></td>
        <td id="LC2354" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2355" class="blob-num js-line-number" data-line-number="2355"></td>
        <td id="LC2355" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2264</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2356" class="blob-num js-line-number" data-line-number="2356"></td>
        <td id="LC2356" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>73,-109v10,15,87,16,87,42v0,11,-5,16,-13,16v-36,-11,-69,-24,-109,-31v-18,-8,-18,-13,-9,-36v59,-56,93,-83,101,-83v16,0,18,17,14,28v-27,24,-42,35,-71,64xm10,-29v35,-12,117,-26,148,-3v1,2,-5,19,-8,18r-124,15v-16,2,-26,-18,-16,-30<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2357" class="blob-num js-line-number" data-line-number="2357"></td>
        <td id="LC2357" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">168</span></td>
      </tr>
      <tr>
        <td id="L2358" class="blob-num js-line-number" data-line-number="2358"></td>
        <td id="LC2358" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2359" class="blob-num js-line-number" data-line-number="2359"></td>
        <td id="LC2359" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2265</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2360" class="blob-num js-line-number" data-line-number="2360"></td>
        <td id="LC2360" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>115,-174v20,7,53,36,20,57v-19,11,-91,68,-82,59v-18,3,-25,-22,-13,-31v15,-10,14,-10,70,-51r-50,-37v-5,-4,-5,-27,4,-28v16,7,40,17,51,31xm14,-32v33,-10,86,-14,127,-10v12,12,5,23,-11,27v-49,9,-82,13,-99,13v-22,0,-24,-16,-17,-30<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2361" class="blob-num js-line-number" data-line-number="2361"></td>
        <td id="LC2361" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">163</span></td>
      </tr>
      <tr>
        <td id="L2362" class="blob-num js-line-number" data-line-number="2362"></td>
        <td id="LC2362" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2363" class="blob-num js-line-number" data-line-number="2363"></td>
        <td id="LC2363" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u25ca</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2364" class="blob-num js-line-number" data-line-number="2364"></td>
        <td id="LC2364" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>76,-158v48,-8,64,11,100,36v28,19,-5,39,-22,54v-15,13,-40,32,-48,49v-17,5,-12,0,-27,-16v-6,-6,-86,-31,-68,-53r2,-9v27,-23,48,-44,63,-61xm93,-65v12,-2,35,-31,41,-38v-5,-10,-16,-14,-34,-24v-12,12,-36,29,-40,44v19,11,30,18,33,18<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2365" class="blob-num js-line-number" data-line-number="2365"></td>
        <td id="LC2365" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">199</span></td>
      </tr>
      <tr>
        <td id="L2366" class="blob-num js-line-number" data-line-number="2366"></td>
        <td id="LC2366" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2367" class="blob-num js-line-number" data-line-number="2367"></td>
        <td id="LC2367" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2368" class="blob-num js-line-number" data-line-number="2368"></td>
        <td id="LC2368" class="blob-code blob-code-inner js-file-line">});</td>
      </tr>
      <tr>
        <td id="L2369" class="blob-num js-line-number" data-line-number="2369"></td>
        <td id="LC2369" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L2370" class="blob-num js-line-number" data-line-number="2370"></td>
        <td id="LC2370" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/** js sequence diagrams</span></td>
      </tr>
      <tr>
        <td id="L2371" class="blob-num js-line-number" data-line-number="2371"></td>
        <td id="LC2371" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  https://bramp.github.io/js-sequence-diagrams/</span></td>
      </tr>
      <tr>
        <td id="L2372" class="blob-num js-line-number" data-line-number="2372"></td>
        <td id="LC2372" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  (c) 2012-2017 Andrew Brampton (bramp.net)</span></td>
      </tr>
      <tr>
        <td id="L2373" class="blob-num js-line-number" data-line-number="2373"></td>
        <td id="LC2373" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Simplified BSD license.</span></td>
      </tr>
      <tr>
        <td id="L2374" class="blob-num js-line-number" data-line-number="2374"></td>
        <td id="LC2374" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L2375" class="blob-num js-line-number" data-line-number="2375"></td>
        <td id="LC2375" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*global Diagram, _ */</span></td>
      </tr>
      <tr>
        <td id="L2376" class="blob-num js-line-number" data-line-number="2376"></td>
        <td id="LC2376" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2377" class="blob-num js-line-number" data-line-number="2377"></td>
        <td id="LC2377" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">typeof</span> Raphael <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> Snap <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L2378" class="blob-num js-line-number" data-line-number="2378"></td>
        <td id="LC2378" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Raphael or Snap.svg is required to be included.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2379" class="blob-num js-line-number" data-line-number="2379"></td>
        <td id="LC2379" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L2380" class="blob-num js-line-number" data-line-number="2380"></td>
        <td id="LC2380" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2381" class="blob-num js-line-number" data-line-number="2381"></td>
        <td id="LC2381" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-en">isEmpty</span>(<span class="pl-smi">Diagram</span>.<span class="pl-smi">themes</span>)) {</td>
      </tr>
      <tr>
        <td id="L2382" class="blob-num js-line-number" data-line-number="2382"></td>
        <td id="LC2382" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> If you are using stock js-sequence-diagrams you should never see this. This only</span></td>
      </tr>
      <tr>
        <td id="L2383" class="blob-num js-line-number" data-line-number="2383"></td>
        <td id="LC2383" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> happens if you have removed the built in themes.</span></td>
      </tr>
      <tr>
        <td id="L2384" class="blob-num js-line-number" data-line-number="2384"></td>
        <td id="LC2384" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>No themes were registered. Please call registerTheme(...).<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2385" class="blob-num js-line-number" data-line-number="2385"></td>
        <td id="LC2385" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L2386" class="blob-num js-line-number" data-line-number="2386"></td>
        <td id="LC2386" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2387" class="blob-num js-line-number" data-line-number="2387"></td>
        <td id="LC2387" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Set the default hand/simple based on which theme is available.</span></td>
      </tr>
      <tr>
        <td id="L2388" class="blob-num js-line-number" data-line-number="2388"></td>
        <td id="LC2388" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-smi">themes</span>.<span class="pl-smi">hand</span> <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-smi">themes</span>.<span class="pl-smi">snapHand</span> <span class="pl-k">||</span> <span class="pl-smi">Diagram</span>.<span class="pl-smi">themes</span>.<span class="pl-smi">raphaelHand</span>;</td>
      </tr>
      <tr>
        <td id="L2389" class="blob-num js-line-number" data-line-number="2389"></td>
        <td id="LC2389" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-smi">themes</span>.<span class="pl-smi">simple</span> <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-smi">themes</span>.<span class="pl-smi">snapSimple</span> <span class="pl-k">||</span> <span class="pl-smi">Diagram</span>.<span class="pl-smi">themes</span>.<span class="pl-smi">raphaelSimple</span>;</td>
      </tr>
      <tr>
        <td id="L2390" class="blob-num js-line-number" data-line-number="2390"></td>
        <td id="LC2390" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2391" class="blob-num js-line-number" data-line-number="2391"></td>
        <td id="LC2391" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/* Draws the diagram. Creates a SVG inside the container</span></td>
      </tr>
      <tr>
        <td id="L2392" class="blob-num js-line-number" data-line-number="2392"></td>
        <td id="LC2392" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* container (HTMLElement|string) DOM element or its ID to draw on</span></td>
      </tr>
      <tr>
        <td id="L2393" class="blob-num js-line-number" data-line-number="2393"></td>
        <td id="LC2393" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* options (Object)</span></td>
      </tr>
      <tr>
        <td id="L2394" class="blob-num js-line-number" data-line-number="2394"></td>
        <td id="LC2394" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L2395" class="blob-num js-line-number" data-line-number="2395"></td>
        <td id="LC2395" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Diagram</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">drawSVG</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">container</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L2396" class="blob-num js-line-number" data-line-number="2396"></td>
        <td id="LC2396" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> defaultOptions <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L2397" class="blob-num js-line-number" data-line-number="2397"></td>
        <td id="LC2397" class="blob-code blob-code-inner js-file-line">    theme<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hand<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2398" class="blob-num js-line-number" data-line-number="2398"></td>
        <td id="LC2398" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2399" class="blob-num js-line-number" data-line-number="2399"></td>
        <td id="LC2399" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2400" class="blob-num js-line-number" data-line-number="2400"></td>
        <td id="LC2400" class="blob-code blob-code-inner js-file-line">  options <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">defaults</span>(options <span class="pl-k">||</span> {}, defaultOptions);</td>
      </tr>
      <tr>
        <td id="L2401" class="blob-num js-line-number" data-line-number="2401"></td>
        <td id="LC2401" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2402" class="blob-num js-line-number" data-line-number="2402"></td>
        <td id="LC2402" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-smi">options</span>.<span class="pl-smi">theme</span> <span class="pl-k">in</span> <span class="pl-smi">Diagram</span>.<span class="pl-smi">themes</span>)) {</td>
      </tr>
      <tr>
        <td id="L2403" class="blob-num js-line-number" data-line-number="2403"></td>
        <td id="LC2403" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Unsupported theme: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">options</span>.<span class="pl-smi">theme</span>);</td>
      </tr>
      <tr>
        <td id="L2404" class="blob-num js-line-number" data-line-number="2404"></td>
        <td id="LC2404" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L2405" class="blob-num js-line-number" data-line-number="2405"></td>
        <td id="LC2405" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2406" class="blob-num js-line-number" data-line-number="2406"></td>
        <td id="LC2406" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> TODO Write tests for this check</span></td>
      </tr>
      <tr>
        <td id="L2407" class="blob-num js-line-number" data-line-number="2407"></td>
        <td id="LC2407" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">isString</span>(container) <span class="pl-k">?</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(container) <span class="pl-k">:</span> container;</td>
      </tr>
      <tr>
        <td id="L2408" class="blob-num js-line-number" data-line-number="2408"></td>
        <td id="LC2408" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (div <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">div</span>.<span class="pl-c1">tagName</span>) {</td>
      </tr>
      <tr>
        <td id="L2409" class="blob-num js-line-number" data-line-number="2409"></td>
        <td id="LC2409" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Invalid container: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> container);</td>
      </tr>
      <tr>
        <td id="L2410" class="blob-num js-line-number" data-line-number="2410"></td>
        <td id="LC2410" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L2411" class="blob-num js-line-number" data-line-number="2411"></td>
        <td id="LC2411" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2412" class="blob-num js-line-number" data-line-number="2412"></td>
        <td id="LC2412" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> Theme <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-smi">themes</span>[<span class="pl-smi">options</span>.<span class="pl-smi">theme</span>];</td>
      </tr>
      <tr>
        <td id="L2413" class="blob-num js-line-number" data-line-number="2413"></td>
        <td id="LC2413" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">new</span> <span class="pl-en">Theme</span>(<span class="pl-c1">this</span>, options, <span class="pl-k">function</span>(<span class="pl-smi">drawing</span>) {</td>
      </tr>
      <tr>
        <td id="L2414" class="blob-num js-line-number" data-line-number="2414"></td>
        <td id="LC2414" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">drawing</span>.<span class="pl-en">draw</span>(div);</td>
      </tr>
      <tr>
        <td id="L2415" class="blob-num js-line-number" data-line-number="2415"></td>
        <td id="LC2415" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L2416" class="blob-num js-line-number" data-line-number="2416"></td>
        <td id="LC2416" class="blob-code blob-code-inner js-file-line">}; <span class="pl-c"><span class="pl-c">//</span> end of drawSVG</span></td>
      </tr>
      <tr>
        <td id="L2417" class="blob-num js-line-number" data-line-number="2417"></td>
        <td id="LC2417" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/** js sequence diagrams</span></td>
      </tr>
      <tr>
        <td id="L2418" class="blob-num js-line-number" data-line-number="2418"></td>
        <td id="LC2418" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  https://bramp.github.io/js-sequence-diagrams/</span></td>
      </tr>
      <tr>
        <td id="L2419" class="blob-num js-line-number" data-line-number="2419"></td>
        <td id="LC2419" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  (c) 2012-2017 Andrew Brampton (bramp.net)</span></td>
      </tr>
      <tr>
        <td id="L2420" class="blob-num js-line-number" data-line-number="2420"></td>
        <td id="LC2420" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Simplified BSD license.</span></td>
      </tr>
      <tr>
        <td id="L2421" class="blob-num js-line-number" data-line-number="2421"></td>
        <td id="LC2421" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L2422" class="blob-num js-line-number" data-line-number="2422"></td>
        <td id="LC2422" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*global jQuery */</span></td>
      </tr>
      <tr>
        <td id="L2423" class="blob-num js-line-number" data-line-number="2423"></td>
        <td id="LC2423" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">typeof</span> jQuery <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L2424" class="blob-num js-line-number" data-line-number="2424"></td>
        <td id="LC2424" class="blob-code blob-code-inner js-file-line">  (<span class="pl-k">function</span>(<span class="pl-smi">$</span>) {</td>
      </tr>
      <tr>
        <td id="L2425" class="blob-num js-line-number" data-line-number="2425"></td>
        <td id="LC2425" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-en">sequenceDiagram</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L2426" class="blob-num js-line-number" data-line-number="2426"></td>
        <td id="LC2426" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2427" class="blob-num js-line-number" data-line-number="2427"></td>
        <td id="LC2427" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $this <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L2428" class="blob-num js-line-number" data-line-number="2428"></td>
        <td id="LC2428" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> diagram <span class="pl-k">=</span> <span class="pl-smi">Diagram</span>.<span class="pl-c1">parse</span>(<span class="pl-smi">$this</span>.<span class="pl-c1">text</span>());</td>
      </tr>
      <tr>
        <td id="L2429" class="blob-num js-line-number" data-line-number="2429"></td>
        <td id="LC2429" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$this</span>.<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2430" class="blob-num js-line-number" data-line-number="2430"></td>
        <td id="LC2430" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">diagram</span>.<span class="pl-en">drawSVG</span>(<span class="pl-c1">this</span>, options);</td>
      </tr>
      <tr>
        <td id="L2431" class="blob-num js-line-number" data-line-number="2431"></td>
        <td id="LC2431" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L2432" class="blob-num js-line-number" data-line-number="2432"></td>
        <td id="LC2432" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2433" class="blob-num js-line-number" data-line-number="2433"></td>
        <td id="LC2433" class="blob-code blob-code-inner js-file-line">  })(jQuery);</td>
      </tr>
      <tr>
        <td id="L2434" class="blob-num js-line-number" data-line-number="2434"></td>
        <td id="LC2434" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L2435" class="blob-num js-line-number" data-line-number="2435"></td>
        <td id="LC2435" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2436" class="blob-num js-line-number" data-line-number="2436"></td>
        <td id="LC2436" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Taken from underscore.js:</span></td>
      </tr>
      <tr>
        <td id="L2437" class="blob-num js-line-number" data-line-number="2437"></td>
        <td id="LC2437" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Establish the root object, `window` (`self`) in the browser, or `global` on the server.</span></td>
      </tr>
      <tr>
        <td id="L2438" class="blob-num js-line-number" data-line-number="2438"></td>
        <td id="LC2438" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> We use `self` instead of `window` for `WebWorker` support.</span></td>
      </tr>
      <tr>
        <td id="L2439" class="blob-num js-line-number" data-line-number="2439"></td>
        <td id="LC2439" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> root <span class="pl-k">=</span> (<span class="pl-k">typeof</span> self <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">self</span>.<span class="pl-c1">self</span> <span class="pl-k">==</span> self <span class="pl-k">&amp;&amp;</span> self) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L2440" class="blob-num js-line-number" data-line-number="2440"></td>
        <td id="LC2440" class="blob-code blob-code-inner js-file-line"> (<span class="pl-k">typeof</span> <span class="pl-c1">global</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">global</span>.<span class="pl-smi">global</span> <span class="pl-k">==</span> <span class="pl-c1">global</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">global</span>);</td>
      </tr>
      <tr>
        <td id="L2441" class="blob-num js-line-number" data-line-number="2441"></td>
        <td id="LC2441" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2442" class="blob-num js-line-number" data-line-number="2442"></td>
        <td id="LC2442" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Export the Diagram object for **Node.js**, with</span></td>
      </tr>
      <tr>
        <td id="L2443" class="blob-num js-line-number" data-line-number="2443"></td>
        <td id="LC2443" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> backwards-compatibility for their old module API. If we&#39;re in</span></td>
      </tr>
      <tr>
        <td id="L2444" class="blob-num js-line-number" data-line-number="2444"></td>
        <td id="LC2444" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> the browser, add `Diagram` as a global object.</span></td>
      </tr>
      <tr>
        <td id="L2445" class="blob-num js-line-number" data-line-number="2445"></td>
        <td id="LC2445" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">exports</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L2446" class="blob-num js-line-number" data-line-number="2446"></td>
        <td id="LC2446" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">module</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span>) {</td>
      </tr>
      <tr>
        <td id="L2447" class="blob-num js-line-number" data-line-number="2447"></td>
        <td id="LC2447" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">exports</span> <span class="pl-k">=</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> Diagram;</td>
      </tr>
      <tr>
        <td id="L2448" class="blob-num js-line-number" data-line-number="2448"></td>
        <td id="LC2448" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L2449" class="blob-num js-line-number" data-line-number="2449"></td>
        <td id="LC2449" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">exports</span>.<span class="pl-smi">Diagram</span> <span class="pl-k">=</span> Diagram;</td>
      </tr>
      <tr>
        <td id="L2450" class="blob-num js-line-number" data-line-number="2450"></td>
        <td id="LC2450" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2451" class="blob-num js-line-number" data-line-number="2451"></td>
        <td id="LC2451" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">root</span>.<span class="pl-smi">Diagram</span> <span class="pl-k">=</span> Diagram;</td>
      </tr>
      <tr>
        <td id="L2452" class="blob-num js-line-number" data-line-number="2452"></td>
        <td id="LC2452" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L2453" class="blob-num js-line-number" data-line-number="2453"></td>
        <td id="LC2453" class="blob-code blob-code-inner js-file-line">}());</td>
      </tr>
      <tr>
        <td id="L2454" class="blob-num js-line-number" data-line-number="2454"></td>
        <td id="LC2454" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.23893s from github-fe165-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-8a4318ffea09a0cdb8214b76cf2926b9f6a0ced318a317bed419db19214c690d.js"></script>
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-5fe43fc6a9e5120c427334a38e9a7601418682a33981c073851434a7e1005049.js"></script>
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f63b92054ffa2df772b4de054fd21a2d9fb1b9f612a879016515201dcad2682c.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

