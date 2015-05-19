FROM ruby:2.2.1

RUN apt-get update && \
    apt-get -y install zsh vim && \
    curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | bash && \
    echo 'DISABLE_AUTO_UPDATE="true"'|cat - ~/.zshrc > /tmp/out && mv /tmp/out ~/.zshrc

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY Gemfile /usr/src/app/
COPY Gemfile.lock /usr/src/app/
# Bundle is happening in bootstrap to speed up development workflow
# RUN bundle install

COPY . /usr/src/app

CMD ["bundle", "exec", "wagon", "serve", "-p", "3333"]