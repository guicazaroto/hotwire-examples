class Todo < ApplicationRecord
  broadcasts
  after_update_commit { broadcast_append_to "todos" }
  validates :title, presence: true
  enum status: { incomplete: 0, complete: 1 }

end
