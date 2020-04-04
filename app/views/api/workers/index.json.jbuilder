json.workers do 
  @workers.each do |worker|
    json.set! worker.id do
      json.extract! worker, :id, :name, :last_name, :email
    end
  end
end