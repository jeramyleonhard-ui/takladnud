CREATE TABLE IF NOT EXISTS users (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(150) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(254) NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('vendor', 'admin') NOT NULL,
  account_status ENUM('active', 'suspended', 'pending') NOT NULL DEFAULT 'pending',
  last_login_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id), UNIQUE KEY uq_users_phone (phone), UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS markets (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(180) NOT NULL,
  slug VARCHAR(180) NOT NULL,
  description TEXT NULL,
  address VARCHAR(500) NULL,
  timezone VARCHAR(64) NOT NULL DEFAULT 'Asia/Bangkok',
  public_map_enabled BOOLEAN NOT NULL DEFAULT TRUE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id), UNIQUE KEY uq_markets_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS market_members (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  market_id BIGINT UNSIGNED NOT NULL,
  user_id BIGINT UNSIGNED NOT NULL,
  market_role ENUM('vendor', 'admin') NOT NULL,
  membership_status ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id), UNIQUE KEY uq_market_members_market_user (market_id, user_id), KEY idx_market_members_user (user_id),
  CONSTRAINT fk_market_members_market FOREIGN KEY (market_id) REFERENCES markets (id) ON DELETE RESTRICT,
  CONSTRAINT fk_market_members_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS market_sessions (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  market_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(120) NOT NULL,
  starts_at DATETIME NOT NULL,
  ends_at DATETIME NOT NULL,
  booking_opens_at DATETIME NULL,
  booking_closes_at DATETIME NULL,
  session_status ENUM('draft', 'open', 'closed', 'cancelled') NOT NULL DEFAULT 'draft',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id), KEY idx_market_sessions_market_starts_status (market_id, starts_at, session_status),
  CONSTRAINT fk_market_sessions_market FOREIGN KEY (market_id) REFERENCES markets (id) ON DELETE RESTRICT,
  CONSTRAINT chk_market_sessions_time CHECK (ends_at > starts_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS stalls (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  market_id BIGINT UNSIGNED NOT NULL,
  stall_code VARCHAR(40) NOT NULL,
  label VARCHAR(100) NULL,
  map_x DECIMAL(8,5) NOT NULL,
  map_y DECIMAL(8,5) NOT NULL,
  map_width DECIMAL(8,5) NOT NULL,
  map_height DECIMAL(8,5) NOT NULL,
  size_description VARCHAR(120) NULL,
  base_fee DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  stall_status ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id), UNIQUE KEY uq_stalls_market_code (market_id, stall_code), KEY idx_stalls_market_status (market_id, stall_status),
  CONSTRAINT fk_stalls_market FOREIGN KEY (market_id) REFERENCES markets (id) ON DELETE RESTRICT,
  CONSTRAINT chk_stalls_map_x CHECK (map_x BETWEEN 0 AND 1),
  CONSTRAINT chk_stalls_map_y CHECK (map_y BETWEEN 0 AND 1),
  CONSTRAINT chk_stalls_map_width CHECK (map_width > 0 AND map_width <= 1),
  CONSTRAINT chk_stalls_map_height CHECK (map_height > 0 AND map_height <= 1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS shops (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  market_id BIGINT UNSIGNED NOT NULL,
  owner_user_id BIGINT UNSIGNED NOT NULL,
  shop_name VARCHAR(180) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT NULL,
  public_phone VARCHAR(20) NULL,
  image_url VARCHAR(500) NULL,
  shop_status ENUM('pending', 'active', 'suspended') NOT NULL DEFAULT 'pending',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id), UNIQUE KEY uq_shops_owner_user (owner_user_id), KEY idx_shops_market_status (market_id, shop_status),
  CONSTRAINT fk_shops_market FOREIGN KEY (market_id) REFERENCES markets (id) ON DELETE RESTRICT,
  CONSTRAINT fk_shops_owner FOREIGN KEY (owner_user_id) REFERENCES users (id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS bookings (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  session_id BIGINT UNSIGNED NOT NULL,
  stall_id BIGINT UNSIGNED NOT NULL,
  shop_id BIGINT UNSIGNED NOT NULL,
  requested_by_user_id BIGINT UNSIGNED NOT NULL,
  reviewed_by_user_id BIGINT UNSIGNED NULL,
  booking_status ENUM('pending', 'approved', 'rejected', 'cancelled') NOT NULL DEFAULT 'pending',
  requested_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  reviewed_at DATETIME NULL,
  decision_note VARCHAR(500) NULL,
  fee_at_booking DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id), KEY idx_bookings_session_status (session_id, booking_status), KEY idx_bookings_shop_created (shop_id, created_at), KEY idx_bookings_stall_session (stall_id, session_id), KEY idx_bookings_requested_by (requested_by_user_id), KEY idx_bookings_reviewed_by (reviewed_by_user_id),
  CONSTRAINT fk_bookings_session FOREIGN KEY (session_id) REFERENCES market_sessions (id) ON DELETE RESTRICT,
  CONSTRAINT fk_bookings_stall FOREIGN KEY (stall_id) REFERENCES stalls (id) ON DELETE RESTRICT,
  CONSTRAINT fk_bookings_shop FOREIGN KEY (shop_id) REFERENCES shops (id) ON DELETE RESTRICT,
  CONSTRAINT fk_bookings_requested_by FOREIGN KEY (requested_by_user_id) REFERENCES users (id) ON DELETE RESTRICT,
  CONSTRAINT fk_bookings_reviewed_by FOREIGN KEY (reviewed_by_user_id) REFERENCES users (id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS audit_logs (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  market_id BIGINT UNSIGNED NOT NULL,
  actor_user_id BIGINT UNSIGNED NULL,
  action VARCHAR(80) NOT NULL,
  entity_type VARCHAR(60) NOT NULL,
  entity_id BIGINT UNSIGNED NOT NULL,
  details JSON NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id), KEY idx_audit_logs_market_created (market_id, created_at), KEY idx_audit_logs_entity (entity_type, entity_id),
  CONSTRAINT fk_audit_logs_market FOREIGN KEY (market_id) REFERENCES markets (id) ON DELETE RESTRICT,
  CONSTRAINT fk_audit_logs_actor FOREIGN KEY (actor_user_id) REFERENCES users (id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
