
select re.name,b.title,ra.rating,ra.rating_date  from reviewers re
inner join ratings ra on ra.reviewer_id = re.id 
inner join books b on b.id = ra.book_id  
order by re.name asc, b.title asc, ra.rating desc