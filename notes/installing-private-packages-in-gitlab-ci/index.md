# Installing Private Packages in Gitlab-CI

##

Gitlab-ci.yml

```
# According to the docs, this should authenticate with the external repo, but it didn't work
before_script:
  - echo -e "machine gitlab.com\nlogin gitlab-ci-token\npassword ${CI_JOB_TOKEN}" > ~/.netrc

# Build Name
production-build:
  script:
    # Because MyPrivateLib is hosted in a private internal registry
    # it can't be installed from an external CI
    # 
    # To handle this (for the time being)
    #
    # Disable the private Registry (as it won't work outside of the network)
    - mv .npmrc __npmrc_private
    #
    # Remove MyPrivateLib:
    - npm uninstall my-private-lib
    #
    # Checkout the source (on the desired branch)
    - git clone --branch release-branch http://gitlab-ci-token:$CI_JOB_TOKEN@gitlab.com/GROUPNAME/my-private-lib
    # Install MyPrivateLib from the checked out directory
    - npm install ./my-private-lib
```
