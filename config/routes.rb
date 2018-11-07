resources “contacts”, only: [ :create]

app/controllers/contacts_controller.rb
class ContactsController < ApplicationController
def create
 @contact = Contact.new(params[:contact][:data])
 name = params[:contact][:data][:name]
 @contact.request = request
 if @contact.deliver
   render json: {message: “Thank you for your Email, #                            {name.capitalize}. I will get back to you shortly!”}
 else
   render json: {message: ‘Error occured. Please try again!’}
 end
end
end

app/models/contact.rb
class Contact < MailForm::Base
 attribute :name, :validate => true
 attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
 attribute :message
 attribute :nickname, :captcha => true
def headers
 {
 :subject => “Contact Inquiry”,
 :to => “yourusername@gmail.com”,
 :from => %(“#{name}” <#{email}>)
 }
 end
end