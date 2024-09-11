FROM php:8.3.11-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    bash \
    curl \
    libpng-dev \
    libzip-dev \
    zlib1g-dev \
    libpq-dev

# Install PHP extensions
RUN docker-php-ext-install gd zip pdo pdo_pgsql pgsql

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install node and npm
RUN apt-get install -y nodejs npm

# Set working directory
WORKDIR /var/www

EXPOSE 9000
