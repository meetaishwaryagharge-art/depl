(function(){
  var html='<div class="rq-ov" id="rqOv" aria-hidden="true"><div class="rq" role="dialog" aria-modal="true" aria-labelledby="rqT">'+
  '<button class="rq-x" type="button" aria-label="Close">&times;</button>'+
  '<div class="eyebrow">Requirement form</div><h2 id="rqT">Discuss your requirement</h2>'+
  '<p class="rq-s">Tell us what you need and we’ll get back to you.</p>'+
  '<form id="rqF"><div class="two"><div class="fld"><label for="rq-n">Full name *</label><input id="rq-n" required></div>'+
  '<div class="fld"><label for="rq-p">Phone number *</label><input id="rq-p" type="tel" required></div></div>'+
  '<div class="two"><div class="fld"><label for="rq-e">Email address *</label><input id="rq-e" type="email" required></div>'+
  '<div class="fld"><label for="rq-c">Company</label><input id="rq-c"></div></div>'+
  '<div class="two"><div class="fld"><label for="rq-t">Requirement type</label><select id="rq-t"><option>Import / Export</option><option>Wholesale / Distribution</option><option>Sourcing &amp; Buying</option><option>VMAL Home Care products</option><option>Property / Assets</option><option>Other</option></select></div>'+
  '<div class="fld"><label for="rq-q">Quantity / timeline</label><input id="rq-q" placeholder="e.g. 5 tonnes, within 30 days"></div></div>'+
  '<div class="fld"><label for="rq-m">Your requirement *</label><textarea id="rq-m" required></textarea></div>'+
  '<button class="btn" type="submit">Submit requirement</button><p class="note">This opens your email app with the details ready to send to info@vmalhomecare.com.</p></form></div></div>';
  document.body.insertAdjacentHTML('beforeend',html);
  var ov=document.getElementById('rqOv'),last;
  function open(e){if(e)e.preventDefault();last=document.activeElement;ov.classList.add('on');ov.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(function(){document.getElementById('rq-n').focus()},50)}
  function close(){ov.classList.remove('on');ov.setAttribute('aria-hidden','true');document.body.style.overflow='';if(last)last.focus()}
  document.querySelectorAll('[data-req]').forEach(function(b){b.addEventListener('click',open)});
  ov.addEventListener('click',function(e){if(e.target===ov||e.target.classList.contains('rq-x'))close()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ov.classList.contains('on'))close()});
  document.getElementById('rqF').addEventListener('submit',function(ev){ev.preventDefault();
    var v=function(i){return document.getElementById(i).value};
    var body='Name: '+v('rq-n')+'\nPhone: '+v('rq-p')+'\nEmail: '+v('rq-e')+'\nCompany: '+v('rq-c')+'\nRequirement type: '+v('rq-t')+'\nQuantity / timeline: '+v('rq-q')+'\n\n'+v('rq-m');
    location.href='mailto:info@vmalhomecare.com?subject='+encodeURIComponent('Requirement: '+v('rq-t')+' - '+v('rq-n'))+'&body='+encodeURIComponent(body);
    close();});
})();
