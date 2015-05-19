source 'https://rubygems.org'

gem 'locomotivecms_wagon', '1.5.4'
# gem 'locomotivecms_wagon', github: 'mondorobot/wagon', branch: 'enhancements'

group :development do
  # Mac OS X
  gem 'rb-fsevent', '~> 0.9.1', require: RUBY_PLATFORM.include?('darwin') && 'rb-fsevent'

  # Unix
  gem 'therubyracer', require: 'v8', platforms: :ruby unless RUBY_PLATFORM.include?('darwin')
  gem 'rb-inotify', '~> 0.9', require: RUBY_PLATFORM.include?('linux') && 'rb-inotify'

  # Windows
  gem 'wdm', '>= 0.1.0', require: RUBY_PLATFORM =~ /mswin|mingw/i && 'wdm'

  gem 'shotgun'
end

group :misc do
  # Add your extra gems here
  gem 'bootstrap-sass', '~> 3.3.4'
  gem 'font-awesome-sass', '~> 4.3.0'
end
